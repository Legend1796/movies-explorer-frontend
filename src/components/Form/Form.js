import React from 'react';
import { Link } from 'react-router-dom';

function Form({ submitButtonText, isActiveSubmitButton, name, onSubmit, children, signupText, signupButtonText, title }) {
  return (
    <form className="popup__form" name={name} noValidate onSubmit={onSubmit}>
      <h2 className="login__title">{title}</h2>
      {children}
      <button className={`login__btn ${!isActiveSubmitButton ? 'popup__save-btn_disabled' : ''}`} type="submit" disabled={!isActiveSubmitButton}>{submitButtonText}</button>
      <div className="login__signup">
        <p className="login__signup-text">{signupText}</p>
        <Link to="/signin" className="login__link">{signupButtonText}</Link>
      </div>
    </form>
  );
}

export default Form;