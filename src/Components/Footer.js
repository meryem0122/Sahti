import SocialMedia from "./SocialMedia";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="last-title">
          <p>Hôpital Universitaire International Cheikh Zaïd</p>
        </div>
        <div className="stafs">
          <div className="adress">
            <i className="fa-solid fa-location-dot"></i>
            <span className="adress-text">Adresse : </span>
            <span>
              Hôpital Cheikh Zaid B.P.6533, Avenue Allal El Fassi,Madinat Al
              Irfane, Hay Riad,Rabat 10 000. Maroc.
            </span>
          </div>
          <div className="contact">
            <div className="fax">
              <i className="fa-solid fa-fax"></i>
              <span className="fax-txt"> Fax :</span>
              <span className="fax-txt"> +212 ( 05 ) 37 68 68 68 </span>
            </div>
            <div className="email">
              <i className="fa-solid fa-envelope"></i>
              <span> Email :</span>
              <a href="mailto:contact@hcz.ma">contact@hcz.ma </a>
            </div>
            <div className="emergency">
              <i className="fa-solid fa-truck-medical"></i>
              <span> Urgences :</span>
              <span> 080-2000606 </span>
            </div>
            <div className="consultation">
              <i className="fa-solid fa-user"></i>
              <span> Consultation :</span>
              <span> +212(05) 37 13 14 00 </span>
            </div>
          </div>
        </div>
        <img src="/images/steto.jpg" className="steto"></img>
      </div>
    </>
  );
}
