import { useState, useEffect } from "react";
import SimpleService from "./SimpleService";
import { Link } from "react-router-dom";

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

export default function SimpleSeeService({ simpleserviceDetails }) {
  const [isHover4, setIsHover4] = useState(false);
  return (
    <div className="see-service-container">
      <div className="part1">
        <h1>Hôpital Cheikh Zaïd</h1>
        <p>
          L'hôpital Universitaire International de Cheikh Zaid est un hôpital,
          dans le secteur privé, de soins et santé cardiologie, maladies
          vasculaires, dentaire, chirurgie plastique et autres spécialités. Il a
          un statut juridique d'établissement et un secteur d'activité :
          "hôpitaux et cliniques", il est situé sur l'avenue Allal El fassi
          Madinat Al airfane Hay riad Rabat au Maroc
        </p>
        <Link to={"/all-services"}>
          <button
            onMouseEnter={() => setIsHover4(true)}
            onMouseLeave={() => setIsHover4(false)}
            style={{
              backgroundColor: isHover4 ? "rgb(100, 120, 167)" : "transparent",
              color: isHover4 ? " #fff" : "black",
              boxShadow: isHover4
                ? "0 1rem 4rem rgb(146, 213, 246)"
                : "0 2rem 2rem rgba(0, 0, 0, 0.1)",
              marginLeft: "-16.8rem",
            }}
          >
            <span
              href="#"
              style={{
                color: isHover4 ? " #fff" : "black",
                fontSize: "1.5rem",
              }}
            >
              Voir tous les services
            </span>
          </button>
        </Link>
      </div>
      <div className="part2">
        {simpleserviceDetails.map((service) => (
          <SimpleService service={service} />
        ))}
      </div>
    </div>
  );
}
