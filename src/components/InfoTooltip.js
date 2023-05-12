import React from "react";
import aprove from "../images/success-icon.svg";
import denied from "../images/failedredCross.svg";

const InfoTooltip = ({ error, infoToolOpen, handleClose }) => {
  return (
    <div className={`popup ${infoToolOpen && "popup_opened"}`}>
      <div className="popup__container infoTooltip">
        <button
          className="close-button pointer"
          type="button"
          onClick={handleClose}
        />
        {error ? (
          <>
            <img src={denied} alt="Icono de rechazo" className="popup__image" />
            <h2 className="popup__title">
              Uy, algo salió mal. Por favor, inténtalo de nuevo
            </h2>
          </>
        ) : (
          <>
            <img
              src={aprove}
              alt="Icono de aprobación"
              className="popup__image"
            />
            <h2 className="popup__title">¡Correcto! Ya estás registrado</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default InfoTooltip;
