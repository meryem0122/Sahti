import React from "react";
export default function CallServiceButton() {
  const handleClick = () => {
    const confirmCall = window.confirm(
      "Cette application souhaite ouvrir l'application téléphonique pour passer un appel. Voulez-vous continuer ?"
    );
    if (confirmCall) {
      window.location.href = "tel:+212612345678";
    }
  };

  return (
    <button onClick={handleClick} style={{ border: "none" }}>
      <span>+212 ( 05 ) 37 68 68 68</span>
      <span>
        <i class="fa-solid fa-phone"></i>
      </span>
    </button>
  );
}
