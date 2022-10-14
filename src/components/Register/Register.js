import React from 'react';
import logoLoggedIn from '../../images/header-logo.svg';
import Form from '../Form/Form';
import '../Register/Register.css'
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function Register({ onLoginIn }) {

  const { values, handleChange, errors, isValid, resetErrors } = useFormAndValidation({})

  function handleSubmit(e) {
    e.preventDefault();
    onLoginIn(values);
  }

  React.useEffect(() => {
    resetErrors({ email: '', password: '' });
  }, []);

  return (
    <div className="login">
      <img className="login__logo" src={logoLoggedIn} alt="Логотип сайта" />
      <Form onSubmit={handleSubmit} name="login" isActiveSubmitButton={isValid} submitButtonText="Войти" signupText="Уже зарегистрированы?" signupButtonText="Войти" title="Добро пожаловать!">
        <span className="login__input-placehilder">Email</span>
        <input className="login__input login__input_type_email" id="email" name="email" type="email" value={values.email || ''} onChange={handleChange} required />
        <span className={`login__input-error url-input-error ${!isValid ? 'login__input-error_active popup__input_type_error' : ''}`}>{errors.email}</span>
        <span className="login__input-placeholder">Пароль</span>
        <input className="login__input login__input_type_password" id="password" name="password" type="password" value={values.password || ''} onChange={handleChange} minLength="6" maxLength="20" required />
        <span className={`login__input-error password-input-error ${!isValid ? 'login__input-error_active popup__input_type_error' : ''}`}>{errors.password}</span>
      </Form>
    </div >
  )
}

export default Register;