import Header from "./Header.js";
import React from "react";
import SimpleSeeService from "./SimpleSeeService.js";
import SocialMedia from "./SocialMedia.js";
import "../index.css";
import CallServiceButton from "./CallServiceButton.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./Footer.js";
const simpleserviceDetails = [
  {
    id: 1,
    image: "/images/hospitalisation.jpg",
    title: "Hospitalisation",
    text: "Un accompagnement médical complet pour les patients nécessitant un séjour à l’hôpital.",
    href: "https://www.hcz.ma/hospitalisations/",
  },
  {
    id: 2,
    image: "/images/oncologie.jpeg",
    title: "Oncologie",
    text: "Prise en charge spécialisée pour le diagnostic et le traitement des cancers.",
    href: "https://www.hcz.ma/oncologie/",
  },
  {
    id: 3,
    image: "/images/consultaion.jpeg",
    title: "Consultation",
    text: "Des rendez-vous médicaux pour un suivi personnalisé avec nos spécialistes.",
    href: "https://www.hcz.ma/consultations/",
  },
  {
    id: 4,
    image: "/images/operation.jpeg",
    title: "Réanimation",
    text: "Soins intensifs pour les cas critiques nécessitant une surveillance constante.",
    href: "https://www.hcz.ma/reanimation/",
  },
  {
    id: 5,
    image: "/images/ambulatoire.jpeg",
    title: "Ambulation",
    text: "Encadrement pour aider les patients à retrouver leur mobilité.",
    href: "https://www.hcz.ma/ambulatoire/",
  },
  {
    id: 6,
    image: "/images/bloc-operatoire (2).jpeg",
    title: "Bloc opératoire",
    text: "Un espace stérile dédié aux interventions chirurgicales en toute sécurité.",
    href: "https://www.hcz.ma/bloc-operatoire/",
  },
];
export default function Overview() {
  return (
    <>
      <div style={{ height: "8rem", backgroundColor: "rgb(123,150,204)" }}>
        <Header />
      </div>
      <OverviewTraitement />
      <SimpleSeeService simpleserviceDetails={simpleserviceDetails} />
      <Footer />
      <div style={{ height: "6rem" }}>
        <SocialMedia />
      </div>
    </>
  );
}

function OverviewTraitement() {
  return (
    <div className="overview-container">
      <div className="right-part">
        <h2 className="hop">Hopital Universitaire Cheikh Zaid</h2>
        <h1>Traitements & Services</h1>
        <div className="rendez-vous-provider">
          <Link to={"/rendez-vous"}>
            <button className="rendez-vous">
              <span className="text">Prendre un Rendez-vous</span>
              <span className="flech">
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </Link>
          <button>
            <a
              href="https://www.hcz.ma/trouver-un-doctor/"
              target="_blank"
              rel="noopener noreferrer"
              className="provider"
            >
              <span className="text">Trouvez un Fornisseur</span>
              <span className="flech">
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </a>
          </button>
          <CallServiceButton />
        </div>
        <Remplissage />
      </div>
      <div className="left-part">
        <div className="overview-img-wrapper">
          <img className="overview-img" src="/images/overview-left.jpg"></img>
        </div>
      </div>
    </div>
  );
}

function Remplissage() {
  return (
    <div className="remplissage-container">
      <div className="heart">
        <i class="fa-solid fa-heart-pulse"></i>
        <div className="rempli-text">
          <h2 className="rempli-title 1">Les spécialistes</h2>
          <p>
            Cheikh Zaïd accueille les patients pour des consultations
            chirurgicales
          </p>
        </div>
      </div>
      <div className="admission">
        <i class="fa-solid fa-phone-volume"></i>
        <div className="rempli-text">
          <h2 className="rempli-title 2">Admission</h2>
          <p>
            Le service des admissions vous accueille tous les jours 24 h / 24 h
          </p>
        </div>
      </div>
    </div>
  );
}
