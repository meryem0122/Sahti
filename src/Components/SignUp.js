import { useState } from "react";
import { Link } from "react-router-dom";
import { auth, provider, signInWithPopup } from "./firebase";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [showPass, setShowPass] = useState(false);
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);
  const [userName, setUserName] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [email, setEmail] = useState("");
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
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: userName,
          email,
          mot_de_passe: motDePasse,
        }),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de l'envoi du formulaire");
    }
  };
  return (
    <div className="sign-up-page">
      <div className="right">
        <img src="\images\signup.jpeg" className="right-img"></img>
      </div>
      <div className="left">
        <div className="formulair">
          <h1>Start Your Journey</h1>
          <span className="span1">
            Sign up to our app and start your special new experience
          </span>
          <form onSubmit={handleSubmit}>
            <label>User Name</label>
            <input
              onMouseEnter={() => setIsHover1(true)}
              onMouseLeave={() => setIsHover1(false)}
              name="user_name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="User name"
              style={{
                height: "10rem",
                width: "43rem",
                paddingLeft: "1.2rem",
                border: "none",
                borderBottom: isHover1
                  ? "0.2rem solid rgb(111, 183, 231)"
                  : "0.2rem solid rgb(162, 157, 157)",

                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            ></input>
            <label>Email Address</label>
            <input
              onMouseEnter={() => setIsHover2(true)}
              onMouseLeave={() => setIsHover2(false)}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="text"
              placeholder="youremail@gmail.com"
              style={{
                height: "10rem",
                width: "43rem",
                paddingLeft: "1.2rem",
                border: "none",
                borderBottom: "0.15rem solid rgb(162, 157, 157)",
                marginTop: "1rem",
                marginBottom: "1rem",
                borderBottom: isHover2
                  ? "0.2rem solid rgb(111, 183, 231)"
                  : "0.2rem solid rgb(162, 157, 157)",
              }}
            ></input>
            <label>Password</label>
            <div
              style={{
                height: "6rem",
                width: "43rem",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <input
                onMouseEnter={() => setIsHover3(true)}
                onMouseLeave={() => setIsHover3(false)}
                type={showPass ? "text" : "password"}
                name="mot_de_passe"
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
                className="password"
                placeholder="your password"
                style={{
                  height: "4rem",
                  width: "43rem",
                  paddingLeft: "1.2rem",
                  border: "none",
                  borderBottom: "0.15rem solid rgb(162, 157, 157)",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  borderBottom: isHover3
                    ? "0.2rem solid rgb(111, 183, 231)"
                    : "0.2rem solid rgb(162, 157, 157)",
                }}
              />
              <i
                onClick={() => setShowPass((show) => !show)}
                className={
                  showPass ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
                }
                style={{ cursor: "pointer" }}
              ></i>
            </div>

            <div className="remember">
              <input type="checkbox" className="check"></input>
              <p>
                I agree to{" "}
                <em style={{ color: "blue" }}>the Terms & Conditions</em>
              </p>
            </div>
            <button className="sign-up-btn" type="submit">
              Sign up
            </button>
            <span>
              already have an account <Link to={"/signin"}>Sign In</Link>
            </span>
          </form>
          <div className="divider-text">Or</div>
          <button className="sign-up-google" onClick={handleGoogleSignIn}>
            <img
              src="images\google.jpg"
              alt="google"
              style={{ height: "3rem", width: "auto" }}
            ></img>
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
