import { useState, useEffect } from "react";

import Service from "./Service.js";
const serviceDetails = [
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
  {
    id: 7,
    image: "/images/urgence.jpeg",
    title: "Urgences",
    text: "Prise en charge rapide et efficace des situations médicales urgentes.",
    href: "https://www.hcz.ma/soins-urgences/",
  },
  {
    id: 8,
    image: "/images/Chirurgie esthétique.jpeg",
    title: "Chirurgie esthétique",
    text: "Des interventions pour améliorer l’apparence physique avec sécurité et discrétion.",
    href: "https://www.hcz.ma/chirurgie-esthetique/",
  },
  {
    id: 9,
    image: "/images/dentaire.jpeg",
    title: "Cabinet dentaire",
    text: "Soins dentaires complets pour une santé bucco-dentaire optimale.",
    href: "https://www.hcz.ma/cabinet-dentaire/",
  },
  {
    id: 10,
    image: "/images/kinestherapie.jpeg",
    title: "Kinésthétique",
    text: "Rééducation et bien-être corporel grâce à des séances de kinésithérapie adaptées.",
    href: "https://www.hcz.ma/kinesitherapie/",
  },
  {
    id: 11,
    image: "/images/medicaments.jpeg",
    title: "Médicaments",
    text: "Accès à une large gamme de traitements prescrits avec conseils professionnels.",
    href: "https://www.hcz.ma/pharmacie-hospitaliere/",
  },
];

export default function SeeService({ serviceDetails }) {
  return (
    <div className="see-service-container">
      <div className="part1">
        <h1 style={{ marginTop: "4rem" }}>Hôpital Cheikh Zaïd</h1>
        <p style={{ marginTop: "6rem" }}>
          L'hôpital Universitaire International de Cheikh Zaid est un hôpital,
          dans le secteur privé, de soins et santé cardiologie, maladies
          vasculaires, dentaire, chirurgie plastique et autres spécialités. Il a
          un statut juridique d'établissement et un secteur d'activité :
          "hôpitaux et cliniques", il est situé sur l'avenue Allal El fassi
          Madinat Al airfane Hay riad Rabat au Maroc
        </p>
      </div>
      <div className="part2">
        {serviceDetails.map((service) => (
          <Service service={service} />
        ))}
      </div>
    </div>
  );
}
