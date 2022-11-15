import React from 'react';
import logoLoggedIn from '../../images/header-logo.svg';
import Form from '../Form/Form';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { Link } from 'react-router-dom';

function Login({ onLoginIn }) {

  const { values, handleChange, errors, isValid, resetErrors } = useFormAndValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    onLoginIn(values);
  }

  React.useEffect(() => {
    resetErrors({ email: '', password: '' });
  }, []);

  return (
    <div className='login'>
      <Link className='header__logo-link' to='/main'><img className='login__logo' src={logoLoggedIn} alt='Логотип сайта' /></Link>
      <Form onSubmit={handleSubmit} name='login' isActiveSubmitButton={isValid} submitButtonText='Войти' signupText='Ещё не зарегистрированы?' title='Рады видеть!'>
        <div className='login__input-container'>
          <span className='login__input-placeholder'>E-mail</span>
          <input className='login__input login__input_type_email' id='email' name='email' type='email' value={values.email || ''} onChange={handleChange} required />
          <span className={`login__input-error url-input-error ${!isValid ? 'login__input-error_active' : ''}`}>{errors.email}</span>
        </div>
        <div className='login__input-container'>
          <span className='login__input-placeholder'>Пароль</span>
          <input className={`login__input login__input_type_password ${!isValid ? 'login__input_type-error_active' : ''}`} id='password' name='password' type='password' value={values.password || ''} onChange={handleChange} minLength='6' maxLength='20' required />
          <span className={`login__input-error password-input-error ${!isValid ? 'login__input-error_active' : ''}`}>{errors.password}</span>
        </div>
      </Form>
    </div >
  )
}

export default Login;