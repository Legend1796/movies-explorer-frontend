import React from "react";

function InfoTooltip({ isOpen, onClose, title, image, name }) {
  return (
    <div className={`infoTooltip infoTooltip_${name} ${isOpen ? 'infoTooltip_opened' : ''}`} >
      <div className="infoTooltip__container">
        <img className="infoTooltip__access-image" src={image} alt="Картинка авторизации" />
        <h2 className="infoTooltip__text_access-container">{title}</h2>
        <button onClick={onClose} className="infoTooltip__close" type="button" aria-label="Закрыть" />
      </div>
    </ div >
  )
}

export default InfoTooltip;