import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import { NavLink } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SocialMedia from "./Components/SocialMedia";
import SimpleSeeService from "./Components/SimpleSeeService";
import "./index.css";
// import Overview from "./Components/Overview";
import OverviewPage from "./Pages/OverviewPage";
import RendezVousPage from "./Pages/RendezVousPage";
import AllServices from "./Pages/AllServicesPage";

const slidDetails = [
  {
    id: 1,
    image: "/images/babyCare.jpeg",
    title: "Un soin tout en douceur pour nos tout-petits",
    text: "Nos spécialistes en pédiatrie s'engagent à offrir des soins attentifs et bienveillants pour la santé et le bien-être de votre enfant. Avec une approche douce et une expertise reconnue, nous veillons à ce que chaque petit patient se sente en sécurité, à l'aise et bien pris en charge à chaque étape de son parcours.",
  },
  {
    id: 2,
    image: "/images/familyHealth.jpeg",
    title: "Protéger ce qui compte le plus",
    text: "Au cœur de notre mission se trouve l’engagement de protéger le bien-être de votre famille. Nos professionnels de santé offrent des soins complets et empreints de compassion, pour que chaque membre de votre famille reçoive l’attention et la protection qu’il mérite.",
  },
  {
    id: 3,
    image: "/images/explain.jpeg",
    title: "Une communication claire pour de meilleurs soins",
    text: "Nous croyons que comprendre sa santé est la première étape vers la guérison. Nos médecins prennent le temps d’expliquer chaque diagnostic, option de traitement et étape suivante, afin que vous soyez pleinement informé, rassuré et confiant dans votre parcours de soins.",
  },
  {
    id: 4,
    image: "/images/groupOfDoctors.jpeg",
    title: "Un service médical de qualité",
    text: "Notre équipe garantit un niveau de service médical élevé, avec un engagement fort envers l’excellence et la satisfaction des patients.",
  },
  {
    id: 5,
    image: "/images/consultationADistance.jpeg",
    title: "La télémédecine pour tous",
    text: "Il n’a jamais été aussi simple de consulter un professionnel de santé. Obtenez des conseils d’experts, où que vous soyez.",
  },
  {
    id: 6,
    image: "/images/lifeWork.jpeg",
    title: "Équilibrer vie et travail",
    text: "Nous vous aidons à préserver votre santé tout en conciliant les exigences du travail et de la vie quotidienne.",
  },
];
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

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <>
                <Accueil slidDetails={slidDetails} />
                <SimpleSeeService simpleserviceDetails={simpleserviceDetails} />
                <Objectifs />
                <Footer />
                <SocialMedia />
              </>
            }
          />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/rendez-vous" element={<RendezVousPage />} />
          <Route
            path="/all-services"
            element={<AllServices serviceDetails={serviceDetails} />}
          />
        </Routes>
      </BrowserRouter>

      {/* <SignIn />
      <SignUp /> */}
    </>
  );
}
function Accueil({ slidDetails }) {
  return (
    <div className="accueil">
      <div className="container">
        <Slide slidDetails={slidDetails} />
      </div>
    </div>
  );
}

function Slide({ slidDetails }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slidDetails.length - 1 ? 0 : prevSlide + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [slidDetails.length]);

  const slide = slidDetails[currentSlide];

  return (
    <>
      <div className="slide">
        <div className="slide-img-wrapper">
          <img src={slide.image} alt={slide.title} />
        </div>
        <div className="slide-title">
          <h1>{slide.title}</h1>
        </div>
        <div className="slide-text">
          <p>{slide.text}</p>
        </div>
      </div>
      <Header />
      <Link to={"/signin"}>
        <button className="btn sign-in">Sign In</button>
      </Link>
      <Link to={"/signup"}>
        <button className="btn sign-up">Sign Up</button>
      </Link>
    </>
  );
}

// function SignIn() {
//   return (
//     <div className="sign-in-page">
//       <div className="right">
//         <div className="formulair">
//           <h1>Welcome back</h1>
//           <span className="span1">Please enter your details</span>
//           <button className="sign-in-google">
//             <img
//               src="images\google.jpg"
//               alt="google"
//               style={{ height: "3rem", width: "auto" }}
//             ></img>
//             <span>Sign in with Google</span>
//           </button>
//           <div
//             className="divider-text"
//             style={{
//               fontSize: "1.5rem",
//             }}
//           >
//             or
//           </div>
//           <form>
//             <label>Email Address</label>
//             <input
//               type="text"
//               placeholder="youremail@gmail.com"
//               style={{
//                 height: "3.5rem",
//                 width: "43rem",
//                 paddingLeft: "1.2rem",
//                 border: "0.15rem solid #353333",
//               }}
//             ></input>
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="your password"
//               style={{
//                 height: "3.5rem",
//                 width: "43rem",
//                 paddingLeft: "1.2rem",
//                 border: "0.15rem solid #353333",
//               }}
//             />
//             <div className="remember">
//               <div className="remember-me">
//                 <input type="checkbox" className="check"></input>
//                 <label>Remember for 30 days </label>
//               </div>
//               <a href="#">forget password</a>
//             </div>
//             <button className="sign-in-btn">Sign in</button>
//             <span>
//               Don't have an account ? <a href="#">Sign Up</a>
//             </span>
//           </form>
//         </div>
//       </div>
//       <div className="left">
//         <img src="/images/simple-doctor.jpeg" className="left-img"></img>
//       </div>
//     </div>
//   );
// }

// function SignUp() {
//   const [isHover1, setIsHover1] = useState(false);
//   const [isHover2, setIsHover2] = useState(false);
//   const [isHover3, setIsHover3] = useState(false);
//   return (
//     <div className="sign-up-page">
//       <div className="right">
//         <img src="\images\signup.jpeg" className="right-img"></img>
//       </div>
//       <div className="left">
//         <div className="formulair">
//           <h1>Start Your Journey</h1>
//           <span className="span1">
//             Sign up to our app and start your special new experience
//           </span>
//           <form>
//             <label>User Name</label>
//             <input
//               onMouseEnter={() => setIsHover1(true)}
//               onMouseLeave={() => setIsHover1(false)}
//               type="text"
//               placeholder="User name"
//               style={{
//                 height: "10rem",
//                 width: "43rem",
//                 paddingLeft: "1.2rem",
//                 border: "none",
//                 borderBottom: isHover1
//                   ? "0.2rem solid rgb(111, 183, 231)"
//                   : "0.2rem solid rgb(162, 157, 157)",
//                 cursor: isHover1 ? "pointer" : "none",
//                 boxShadow: isHover1
//                   ? "0 0.4rem 4rem rgba(111, 183, 231,0.4)"
//                   : " none",
//                 marginTop: "1rem",
//                 marginBottom: "1rem",
//               }}
//             ></input>
//             <label>Email Address</label>
//             <input
//               onMouseEnter={() => setIsHover2(true)}
//               onMouseLeave={() => setIsHover2(false)}
//               type="text"
//               placeholder="youremail@gmail.com"
//               style={{
//                 height: "10rem",
//                 width: "43rem",
//                 paddingLeft: "1.2rem",
//                 border: "none",
//                 borderBottom: "0.15rem solid rgb(162, 157, 157)",
//                 marginTop: "1rem",
//                 marginBottom: "1rem",
//                 borderBottom: isHover2
//                   ? "0.2rem solid rgb(111, 183, 231)"
//                   : "0.2rem solid rgb(162, 157, 157)",
//                 cursor: isHover2 ? "pointer" : "none",
//                 boxShadow: isHover2
//                   ? "0 0.4rem 4rem rgba(111, 183, 231,0.4)"
//                   : " none",
//               }}
//             ></input>
//             <label>Password</label>
//             <input
//               onMouseEnter={() => setIsHover3(true)}
//               onMouseLeave={() => setIsHover3(false)}
//               type="password"
//               className="password"
//               placeholder="your password"
//               style={{
//                 height: "10rem",
//                 width: "43rem",
//                 paddingLeft: "1.2rem",
//                 border: "none",
//                 borderBottom: "0.15rem solid rgb(162, 157, 157)",
//                 marginTop: "1rem",
//                 marginBottom: "1rem",
//                 borderBottom: isHover3
//                   ? "0.2rem solid rgb(111, 183, 231)"
//                   : "0.2rem solid rgb(162, 157, 157)",
//                 cursor: isHover3 ? "pointer" : "none",
//                 boxShadow: isHover3
//                   ? "0 0.4rem 4rem rgba(111, 183, 231,0.4)"
//                   : " none",
//               }}
//             />
//             <div className="remember">
//               <input type="checkbox" className="check"></input>
//               <p>
//                 I agree to{" "}
//                 <em style={{ color: "blue" }}>the Terms & Conditions</em>
//               </p>
//             </div>
//             <button className="sign-up-btn">Sign up</button>
//             <span>
//               already have an account <a href="#">Sign In</a>
//             </span>
//           </form>
//           <div className="divider-text">Or</div>
//           <button className="sign-up-google">
//             <img
//               src="images\google.jpg"
//               alt="google"
//               style={{ height: "3rem", width: "auto" }}
//             ></img>
//             <span>Sign in with Google</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function SeeService({ serviceDetails }) {
//   const [isHover4, setIsHover4] = useState(false);
//   return (
//     <div className="see-service-container">
//       <div className="part1">
//         <h1>Hôpital Cheikh Zaïd</h1>
//         <p>
//           L'hôpital Universitaire International de Cheikh Zaid est un hôpital,
//           dans le secteur privé, de soins et santé cardiologie, maladies
//           vasculaires, dentaire, chirurgie plastique et autres spécialités. Il a
//           un statut juridique d'établissement et un secteur d'activité :
//           "hôpitaux et cliniques", il est situé sur l'avenue Allal El fassi
//           Madinat Al airfane Hay riad Rabat au Maroc
//         </p>
//         <button
//           onMouseEnter={() => setIsHover4(true)}
//           onMouseLeave={() => setIsHover4(false)}
//           style={{
//             backgroundColor: isHover4 ? "rgb(100, 120, 167)" : "transparent",
//             color: isHover4 ? " #fff" : "black",
//             boxShadow: isHover4
//               ? "0 1rem 4rem rgb(146, 213, 246)"
//               : "0 2rem 2rem rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <a
//             href="#"
//             style={{ color: isHover4 ? " #fff" : "black", fontSize: "1.5rem" }}
//           >
//             See all treatments and services
//           </a>
//         </button>
//       </div>
//       <div className="part2">
//         {serviceDetails.map((service) => (
//           <Service service={service} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function Service({ service }) {
//   return (
//     <div className="service">
//       <div className="img-wrapper">
//         <a href={service.href} target="_blank" rel="noopener noreferrer">
//           <img
//             src={service.image}
//             alt={service.title}
//             className="service-img"
//           ></img>
//         </a>
//       </div>
//       <h1> {service.title}</h1>
//       <p>{service.text}</p>
//     </div>
//   );
// }

/******************************************* */

function Objectifs() {
  return (
    <div className="objectifs-container">
      <div
        className="img-wrapper"
        style={{
          height: "60rem",
          overflow: "hidden",
          opacity: "0.7",
          backgroundColor: "blue",
          zIndex: "10",
        }}
      >
        <img src="/images/doctors-img.jpeg" alt="group"></img>
      </div>
      <div className="img-cover"></div>
      <h2>Groupe de Cheikh Zaïd se fixe </h2>
      <h1>3 Principaux objectifs : </h1>
      <div className="objectifs">
        <div className="obj1">
          <i className="fa-solid fa-thumbs-up"></i>
          <p>L'excellence dans la prise en charge du patient</p>
        </div>
        <div className="obj2">
          <i className="fa-solid fa-handshake-angle"></i>
          <p>La prise en charge globale du patient</p>
        </div>
        <div className="obj3">
          <i className="fa-solid fa-house-medical"></i>
          <p>La formation et le développement du personnel soignant</p>
        </div>
      </div>
    </div>
  );
}

/******************************************* */

// function SocialMedia() {
//   return (
//     <div className="bas">
//       <div className="copyright">Copyright © 2025</div>
//       <div className="social-media">
//         <a
//           href="https://www.instagram.com/explore/locations/236196163/hopital-cheikh-zayed-rabat/?hl=fr"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <i className="fa-brands fa-instagram"></i>
//         </a>
//         <a
//           href="https://www.facebook.com/pages/Hopital%20Cheikh%20Zayed%20Rabat/224302760947077/#"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <i className="fa-brands fa-facebook"></i>
//         </a>
//         <a
//           href="https://www.youtube.com/@hopitaluniversitaireintern5480"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <i className="fa-brands fa-youtube"></i>
//         </a>
//       </div>
//     </div>
//   );
// }
