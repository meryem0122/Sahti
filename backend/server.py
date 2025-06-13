# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import mysql.connector

# app = Flask(__name__)
# CORS(app)  # pour autoriser React à accéder au backend

# # Connexion à la base de données
# db = mysql.connector.connect(
#     host="localhost",
#     user="root",         # change si ton utilisateur MySQL est différent
#     password="",         # mets ton mot de passe ici
#     database="ppp_db"
# )

# cursor = db.cursor()

# @app.route("/api/signup", methods=["POST"])
# def signup():
#     if not user_name or not email or not mot_de_passe:
#         return jsonify({"message": "Champs manquants"}), 400

#     try:
#         cursor.execute("SELECT * FROM utilisateurs WHERE email = %s", (email,))
#         if cursor.fetchone():
#             return jsonify({"message": "Un compte existe déjà avec cet email"}), 409

#         query = "INSERT INTO utilisateurs (user_name, email, mot_de_passe) VALUES (%s, %s, %s)"
#         cursor.execute(query, (user_name, email, mot_de_passe))
#         db.commit()
#         return jsonify({"message": "Bienvenue parmi nous !"}), 201
#     except Exception as e:
#         return jsonify({"message": f"Erreur lors de l'ajout : {str(e)}"}), 500


# @app.route('/api/signin',methods =['POST'])
# def signin():
#     if not email or not mot_de_passe:
#         return jsonify({"success": False, "message": "Champs manquants"}), 400

#     cursor.execute("SELECT * FROM utilisateurs WHERE email = %s AND mot_de_passe = %s", (email, mot_de_passe))
#     result = cursor.fetchone()

#     if result:
#         return jsonify({"success": True, "message": "Connexion réussie"})
#     else:
#         return jsonify({"success": False, "message": "Email ou mot de passe invalide"}), 401



# if __name__ == "__main__":
#     app.run(debug=True)


from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app) # Autorise les requêtes cross-origin depuis le frontend

db = mysql.connector.connect(
host="localhost",
user="root", # Remplace si nécessaire
password="meryam2027", # Ton mot de passe MySQL (vide ici)
database="ppp_db"
)

cursor = db.cursor()

@app.route("/api/signup", methods=["POST"])
def signup():
    data = request.get_json()
    user_name = data.get("user_name")
    email = data.get("email")
    mot_de_passe = data.get("mot_de_passe")
    if not user_name or not email or not mot_de_passe:
     return jsonify({"message": "Champs manquants"}), 400

    try:
        cursor.execute("SELECT * FROM utilisateurs WHERE email = %s", (email,))
        if cursor.fetchone():
            return jsonify({"message": "Un compte existe déjà avec cet email"}), 409

        query = "INSERT INTO utilisateurs (user_name, email, mot_de_passe) VALUES (%s, %s, %s)"
        cursor.execute(query, (user_name, email, mot_de_passe))
        db.commit()
        return jsonify({"message": "Bienvenue parmi nous !"}), 201
    except Exception as e:
        return jsonify({"message": f"Erreur lors de l'ajout : {str(e)}"}), 500

@app.route('/api/signin', methods=['POST'])
def signin():
    data = request.get_json()
    email = data.get("email")
    mot_de_passe = data.get("mot_de_passe")
    if not email or not mot_de_passe:
     return jsonify({"success": False, "message": "Champs manquants"}), 400

    try:
        cursor.execute("SELECT * FROM utilisateurs WHERE email = %s AND mot_de_passe = %s", (email, mot_de_passe))
        result = cursor.fetchone()

        if result:
           return jsonify({"success": True, "message": "Connexion réussie"}), 200
        else:
           return jsonify({"success": False, "message": "Email ou mot de passe invalide"}), 401
    except Exception as e:
      return jsonify({"success": False, "message": f"Erreur serveur : {str(e)}"}), 500
if __name__ == "__main__":
  app.run(debug=True)
