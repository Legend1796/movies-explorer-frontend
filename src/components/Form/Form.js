import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../Form/Form.css'

function Form({ submitButtonText, isActiveSubmitButton, name, onSubmit, children, signupText, title }) {
  return (
    <form className="popup__form" name={name} noValidate onSubmit={onSubmit}>
      <h2 className="login__title">{title}</h2>
      {children}
      <button className={`login__btn ${!isActiveSubmitButton ? 'popup__save-btn_disabled' : ''}`} type="submit" disabled={!isActiveSubmitButton}>{submitButtonText}</button>
      <div className="login__signup">
        <p className="login__signup-text">{signupText}</p>
        <Route path="/signup">
          <Link className="login__link" to="/signin">Войти</Link>
        </Route>
        <Route path="/signin">
          <Link className="login__link" to="/signup">Регистрация</Link>
        </Route>
      </div>
    </form>
  );
}

export default Form;