import { Link, Route } from 'react-router-dom';

function Popup({ onClose, isOpen, profileImage, closePopupBtn }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__block' >
        <img src={closePopupBtn} onClick={onClose} className="popup__close" type="button" alt="Закрыть" />
        <div className='popup__navigation'>
          <Route path="/movies">
            <div className='popup__link-container'>
              <Link onClick={onClose} className='popup__link' to='/main'><p className='popup__link-text'>Главная</p></Link>
              <Link onClick={onClose} className='popup__link' to='/movies'><p className='popup__link-text'>Фильмы<div className='popup__underline-movies popup__underline-movies_active' /></p></Link>
              <Link onClick={onClose} className='popup__link' to='/saved-movies'><p className='popup__link-text'>Сохранённые фильмы<div className='popup__underline-movies' /></p></Link>
            </div>
            <Link className='popup__link popup__link-profile' to='/profile'><p className='popup__link-text'>Аккаунт</p><img className='popup__profile-image' src={profileImage} alt='значок профиля' /></Link>
          </Route>
          <Route path="/saved-movies">
            <div className='popup__link-container'>
              <Link onClick={onClose} className='popup__link' to='/main'><p className='popup__link-text'>Главная</p></Link>
              <Link onClick={onClose} className='popup__link' to='/movies'><p className='popup__link-text'>Фильмы<div className='popup__underline-movies' /></p></Link>
              <Link onClick={onClose} className='popup__link' to='/saved-movies'><p className='popup__link-text'>Сохранённые фильмы<div className='popup__underline-movies popup__underline-movies_active' /></p></Link>
            </div>
            <Link className='popup__link popup__link-profile' to='/profile'><p className='popup__link-text'>Аккаунт</p><img className='popup__profile-image' src={profileImage} alt='значок профиля' /></Link>
          </Route>
        </div>
      </div >
      <button onClick={onClose} className="popup__overlay" />
    </div>
  )
}

export default Popup;