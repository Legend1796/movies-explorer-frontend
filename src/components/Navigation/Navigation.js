import { Link, Route } from 'react-router-dom';

function Navigation({ onClose, isOpen, profileImage, closeNavigationBtn, exitProfile }) {

  function loggedOut() {
    exitProfile();
    onClose();
  }

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__block' >
        <img src={closeNavigationBtn} onClick={onClose} className="popup__close" type="button" alt="Закрыть" />
        <div className='popup__navigation'>
          <Route path="/movies">
            <div className='popup__link-container'>
              <Link onClick={loggedOut} className='popup__link' to='/main'><p className='popup__link-text'>Главная</p></Link>
              <Link onClick={onClose} className='popup__link' to='/movies'><div className='popup__link-text'>Фильмы<div className='popup__underline-movies popup__underline-movies_active' /></div></Link>
              <Link onClick={onClose} className='popup__link' to='/saved-movies'><p className='popup__link-text'>Сохранённые фильмы<div className='popup__underline-movies' /></p></Link>
            </div>
            <Link onClick={onClose} className='popup__link popup__link-profile' to='/profile'><p className='popup__link-text'>Аккаунт</p><img className='popup__profile-image' src={profileImage} alt='значок профиля' /></Link>
          </Route>
          <Route path="/saved-movies">
            <div className='popup__link-container'>
              <Link onClick={loggedOut} className='popup__link' to='/main'><p className='popup__link-text'>Главная</p></Link>
              <Link onClick={onClose} className='popup__link' to='/movies'><p className='popup__link-text'>Фильмы<div className='popup__underline-movies' /></p></Link>
              <Link onClick={onClose} className='popup__link' to='/saved-movies'><div className='popup__link-text'>Сохранённые фильмы<div className='popup__underline-movies popup__underline-movies_active' /></div></Link>
            </div>
            <Link onClick={onClose} className='popup__link popup__link-profile' to='/profile'><p className='popup__link-text'>Аккаунт</p><img className='popup__profile-image' src={profileImage} alt='значок профиля' /></Link>
          </Route>
          <Route path="/profile">
            <div className='popup__link-container'>
              <Link onClick={loggedOut} className='popup__link' to='/main'><p className='popup__link-text'>Главная</p></Link>
              <Link onClick={onClose} className='popup__link' to='/movies'><p className='popup__link-text'>Фильмы<div className='popup__underline-movies' /></p></Link>
              <Link onClick={onClose} className='popup__link' to='/saved-movies'><p className='popup__link-text'>Сохранённые фильмы<div className='popup__underline-movies' /></p></Link>
            </div>
            <Link onClick={onClose} className='popup__link popup__link-profile' to='/profile'><p className='popup__link-text'>Аккаунт</p><img className='popup__profile-image' src={profileImage} alt='значок профиля' /></Link>
          </Route>
        </div>
      </div >
      <button onClick={onClose} className="popup__overlay" />
    </div>
  )
}

export default Navigation;