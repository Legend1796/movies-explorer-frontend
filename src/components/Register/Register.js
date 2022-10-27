import React from 'react';
import logoLoggedIn from '../../images/header-logo.svg';
import Form from '../Form/Form';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function Register({ onRegister }) {

  const { values, handleChange, errors, isValid, resetErrors } = useFormAndValidation({})

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values);
  }

  React.useEffect(() => {
    resetErrors({ name: '', email: '', password: '' });
  }, []);

  return (
    <div className='login'>
      <img className='login__logo' src={logoLoggedIn} alt='Логотип сайта' />
      <Form onSubmit={handleSubmit} name='login' isActiveSubmitButton={isValid} submitButtonText='Зарегистрироваться' signupText='Уже зарегистрированы?' title='Добро пожаловать!'>
        <div className='login__input-container'>
          <span className='login__input-placeholder'>Имя</span>
          <input className='login__input login__input_type_email' id='name' name='name' type='text' value={values.name || ''} onChange={handleChange} required />
          <span className={`login__input-error name-input-error ${!isValid ? 'login__input-error_active' : ''}`}>{errors.name}</span>
        </div>
        <div className='login__input-container'>
          <span className='login__input-placeholder'>E-mail</span>
          <input className='login__input login__input_type_email' id='email' name='email' type='email' value={values.email || ''} onChange={handleChange} required />
          <span className={`login__input-error url-input-error ${!isValid ? 'login__input-error_active' : ''}`}>{errors.email}</span>
        </div>
        <div className='login__input-container'>
          <span className='login__input-placeholder'>Пароль</span>
          <input className='login__input login__input_type_password' id='password' name='password' type='password' value={values.password || ''} onChange={handleChange} minLength='6' maxLength='20' required />
          <span className={`login__input-error password-input-error ${!isValid ? 'login__input-error_active' : ''}`}>{errors.password}</span>
        </div>
      </Form>
    </div >
  )
}

export default Register;