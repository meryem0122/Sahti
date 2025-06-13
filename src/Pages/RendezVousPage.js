import Header from "../Components/Header";
import Footer from "../Components/Footer";

import "../index.css";
export default function RendezVousPage() {
  return (
    <>
      <div style={{ height: "8rem", backgroundColor: "rgb(123,150,204)" }}>
        <Header />
      </div>
      <div className="rendez-vous-container">
        <span>
          Prendre un rendez-vous <i class="fa-solid fa-arrow-down"></i>
        </span>
      </div>
      <div className="numbers">
        <div style={{ display: "flex", gap: "4rem" }}>
          <p>
            Veuillez appeler ce numéro{" "}
            <span style={{ textDecoration: "underline" }}>
              si vous êtes dans une situation urgente
            </span>
          </p>
          <div>
            <CallServiceButton3 />
          </div>
        </div>
        <div style={{ display: "flex", gap: "4rem" }}>
          <p>
            Pour faire un rendez-vous , veillez appeler ce numéro directement :{" "}
          </p>
          <div style={{ textDecoration: "underline" }}>
            <CallServiceButton2 />
          </div>
        </div>
        <p>
          Si vous êtes de l'étranger :{" "}
          <a
            href="https://www.hcz.ma/organisation-des-evacuations/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            Cliquer ici
          </a>{" "}
        </p>
      </div>
      <Footer />
    </>
  );
}

function CallServiceButton2() {
  const handleClick = () => {
    const confirmCall = window.confirm(
      "Cette application souhaite ouvrir l'application téléphonique pour passer un appel. Voulez-vous continuer ?"
    );
    if (confirmCall) {
      window.location.href = "tel:+212612345678";
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        border: "none",
        background: "none",
        textDecoration: "underline",
        fontSize: "1.8rem",
        display: "flex",
        gap: "2rem",
        cursor: "pointer",
      }}
    >
      <span>+212 ( 05 ) 37 68 68 68</span>
      <span>
        <i class="fa-solid fa-phone"></i>
      </span>
    </button>
  );
}

function CallServiceButton3() {
  const handleClick = () => {
    const confirmCall = window.confirm(
      "Cette application souhaite ouvrir l'application téléphonique pour passer un appel. Voulez-vous continuer ?"
    );
    if (confirmCall) {
      window.location.href = "tel:+212612345678";
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        border: "none",
        background: "none",
        textDecoration: "underline",
        fontSize: "1.8rem",
        display: "flex",
        gap: "2rem",
        cursor: "pointer",
      }}
    >
      <span> 15 </span>
      <span>
        <i class="fa-solid fa-phone"></i>
      </span>
    </button>
  );
}
