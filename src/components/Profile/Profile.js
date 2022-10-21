import React from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Profile({ userName, submitButtonText, exitProfile, loggedIn, openNavigation, navigationBtn, profileImage, logoLoggedIn, logoLoggedOut }) {

  const { values, handleChange, errors, isValid, resetErrors } = useFormAndValidation({});
  const currentUser = React.useContext(CurrentUserContext);
  const [isEdit, setIsEdit] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsEdit(false);
    console.log(isEdit);
    // onLoginIn(values);
  }

  function handleOpenNavigation() {
    openNavigation();
  }

  function loggedOut() {
    exitProfile();
  }

  function handleProfileEditBottonClick() {
    setIsEdit(true);
  }

  React.useEffect(() => {
    resetErrors({ email: '', password: '' });
  }, []);

  React.useEffect(() => {
    resetErrors({ name: currentUser.name, email: currentUser.email });
  }, [currentUser]);

  return (
    <>
      <Header loggedIn={loggedIn} openNavigation={handleOpenNavigation} navigationBtn={navigationBtn} profileImage={profileImage} logoLoggedIn={logoLoggedIn} logoLoggedOut={logoLoggedOut} />
      <div className='profile'>
        <h2 className='profile__title'>Привет, {userName}!</h2>
        <div className='profile__inputs'>
          <div className='profile__input-container'>
            <span className='profile__input-placeholder'>Имя</span>
            <input className='profile__input profile__input_type_name' id='name' name='name' type='name' value={values.name || ''} onChange={handleChange} required />
          </div>
          <span className={`profile__input-error name-input-error ${!isValid ? 'profile__input-error_active' : ''}`}>{errors.name}</span>
        </div>
        <div className='profile__underline' />
        <div className='profile__inputs'>
          <div className='profile__input-container'>
            <span className='profile__input-placeholder'>E-mail</span>
            <input className='profile__input profile__input_type_email' id='email' name='email' type='email' value={values.email || ''} onChange={handleChange} required />
          </div>
          <span className={`profile__input-error url-input-error ${!isValid ? 'profile__input-error_active' : ''}`}>{errors.email}</span>
        </div>
        {!isEdit ?
          <>
            <div className='profile__btn'>
              <button className='profile__edit-btn' onClick={handleProfileEditBottonClick}>Редактировать</button>
              <Link to='/main' className='profile__link' onClick={loggedOut}>Выйти из аккаунта</Link>
            </div>
          </>
          : <>
            <form className='profile__btn' onSubmit={handleSubmit}>
              <button className={`login__btn ${!isValid ? 'login__btn_disabled' : ''}`} type='submit' disabled={!isValid}>{submitButtonText}</button>
            </form>
          </>
        }
      </div >
    </>
  )
}

export default Profile;