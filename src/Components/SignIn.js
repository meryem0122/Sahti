import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "./firebase";

export default function SignIn() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // Récupérer les informations de l'utilisateur connecté
      const user = result.user;
      console.log(user);
      // Tu peux rediriger l'utilisateur après la connexion
      // Par exemple, avec React Router :
      navigate("/");
    } catch (error) {
      console.error("Error during Google SignIn", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          mot_de_passe: motDePasse,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message);
        navigate("/"); // Page à afficher si authentification réussie
      } else {
        if (
          window.confirm(result.message + "\nSouhaitez-vous créer un compte ?")
        ) {
          navigate("/signup");
        }
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de la tentative de connexion");
    }
  };

  return (
    <div className="sign-in-page">
      <div className="right">
        <div className="formulair">
          <h1>Welcome back</h1>
          <span className="span1">Please enter your details</span>
          <button className="sign-in-google" onClick={handleGoogleSignIn}>
            <img
              src="images/google.jpg"
              alt="google"
              style={{ height: "3rem", width: "auto" }}
            />
            <span>Sign in with Google</span>
          </button>
          <div className="divider-text" style={{ fontSize: "1.5rem" }}>
            or
          </div>

          <form onSubmit={handleSubmit}>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="youremail@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                height: "3.5rem",
                width: "43rem",
                paddingLeft: "1.2rem",
                border: "none",
                borderBottom: "0.15rem solid black",
              }}
              required
              name="email"
            />

            <label style={{ marginTop: "1.4rem" }}>Password</label>
            <div
              className="pass-field"
              style={{
                height: "3.5rem",
                width: "43rem",
                paddingLeft: "1.2rem",
                border: "none",
                borderBottom: "0.15rem solid black",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type={showPass ? "text" : "password"}
                placeholder="your password"
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
                style={{
                  flex: 1,
                  height: "100%",
                  paddingLeft: "1.2rem",
                  border: "none",
                  outline: "none",
                }}
                required
                name="mot_de_passe"
              />
              <i
                className={
                  showPass ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
                }
                onClick={() => setShowPass((show) => !show)}
                style={{ cursor: "pointer", paddingRight: "1rem" }}
              ></i>
            </div>

            <div className="remember">
              <div className="remember-me">
                <input type="checkbox" className="check" />
                <label>Remember for 30 days</label>
              </div>
              <a href="#">Forget password?</a>
            </div>

            <button className="sign-in-btn" type="submit">
              Sign in
            </button>

            <span>
              Don't have an account ? <Link to={"/signup"}>Sign Up</Link>
            </span>
          </form>
        </div>
      </div>

      <div className="left">
        <img
          src="/images/simple-doctor.jpeg"
          className="left-img"
          alt="illustration"
        />
      </div>
    </div>
  );
}
