import React from 'react';
import '../Profile/Profile.css';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ userName }) {

  const { values, handleChange, errors, isValid, resetErrors } = useFormAndValidation({});
  const currentUser = React.useContext(CurrentUserContext);


  function handleSubmit(e) {
    e.preventDefault();
    // onLoginIn(values);
  }

  React.useEffect(() => {
    resetErrors({ email: '', password: '' });
  }, []);

  React.useEffect(() => {
    resetErrors({ name: currentUser.name, email: currentUser.email });
  }, [currentUser]);

  return (
    <div className="profile">
      <h2 className="profile__title">Привет, {userName}!</h2>
      <div className="profile__inputs">
        <div className="profile__input-container">
          <span className="profile__input-placeholder">Имя</span>
          <input className="profile__input profile__input_type_name" id="name" name="name" type="name" value={values.name || ''} onChange={handleChange} required />
        </div>
        <span className={`profile__input-error name-input-error ${!isValid ? "profile__input-error_active" : ""}`}>{errors.name}</span>
      </div>
      <div className="profile__underline" />
      <div className="profile__inputs">
        <div className="profile__input-container">
          <span className="profile__input-placeholder">E-mail</span>
          <input className="profile__input profile__input_type_email" id="email" name="email" type="email" value={values.email || ''} onChange={handleChange} required />
        </div>
        <span className={`profile__input-error url-input-error ${!isValid ? "profile__input-error_active" : ""}`}>{errors.email}</span>
      </div>
    </div >
  )
}

export default Profile;