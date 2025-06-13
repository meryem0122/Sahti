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
];
export default function SimpleService({ service }) {
  return (
    <div className="service">
      <div className="img-wrapper">
        <a href={service.href} target="_blank" rel="noopener noreferrer">
          <img
            src={service.image}
            alt={service.title}
            className="service-img"
          ></img>
        </a>
      </div>
      <h1> {service.title}</h1>
      <p>{service.text}</p>
    </div>
  );
}
