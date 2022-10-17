import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../Form/Form.css'

function Form({ submitButtonText, isActiveSubmitButton, name, onSubmit, children, signupText, title }) {
  return (
    <form className='popup__form' name={name} noValidate onSubmit={onSubmit}>
      <h2 className='login__title'>{title}</h2>
      {children}
      <button className={`login__btn ${!isActiveSubmitButton ? 'login__btn_disabled' : ''}`} type='submit' disabled={!isActiveSubmitButton}>{submitButtonText}</button>
      <div className='login__signup'>
        <p className='login__signup-text'>{signupText}</p>
        <Route path='/signup'>
          <Link to='/signin' className='login__link'>Войти</Link>
        </Route>
        <Route path='/signin'>
          <Link to='/signup' className='login__link'>Регистрация</Link>
        </Route>
      </div>
    </form>
  );
}

export default Form;