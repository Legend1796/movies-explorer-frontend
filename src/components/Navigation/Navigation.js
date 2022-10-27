import { Link, Route } from 'react-router-dom';

function Navigation({ onClose, isOpen, profileImage, closeNavigationBtn, exitProfile }) {

  function loggedOut() {
    exitProfile();
    onClose();
  }

  return (
    <div className={`navigation ${isOpen ? 'navigation_opened' : ''}`}>
      <div className='navigation__block' >
        <button className='navigation__close-button' type='button'><img src={closeNavigationBtn} onClick={onClose} className='navigation__close' alt='Закрыть' /></button>
        <div className='navigation__container'>
          <Route path="/movies">
            <div className='navigation__links'>
              <Link onClick={loggedOut} className='navigation__link' to='/main'><p className='navigation__link-text'>Главная</p></Link>
              <Link onClick={onClose} className='navigation__link' to='/movies'><div className='navigation__link-text navigation__link-text_active'>Фильмы</div></Link>
              <Link onClick={onClose} className='navigation__link' to='/saved-movies'><p className='navigation__link-text'>Сохранённые фильмы<div className='navigation__underline-movies' /></p></Link>
            </div>
            <Link onClick={onClose} className='navigation__link navigation__link-profile' to='/profile'><p className='navigation__link-text'>Аккаунт</p><img className='navigation__profile-image' src={profileImage} alt='значок профиля' /></Link>
          </Route>
          <Route path="/saved-movies">
            <div className='navigation__link-container'>
              <Link onClick={loggedOut} className='navigation__link' to='/main'><p className='navigation__link-text'>Главная</p></Link>
              <Link onClick={onClose} className='navigation__link' to='/movies'><p className='navigation__link-text'>Фильмы<div className='navigation__underline-movies' /></p></Link>
              <Link onClick={onClose} className='navigation__link' to='/saved-movies'><div className='navigation__link-text navigation__link-text_active'>Сохранённые фильмы<div className='navigation__underline-movies navigation__underline-movies_active' /></div></Link>
            </div>
            <Link onClick={onClose} className='navigation__link navigation__link-profile' to='/profile'><p className='navigation__link-text'>Аккаунт</p><img className='navigation__profile-image' src={profileImage} alt='значок профиля' /></Link>
          </Route>
          <Route path="/profile">
            <div className='navigation__link-container'>
              <Link onClick={loggedOut} className='navigation__link' to='/main'><p className='navigation__link-text'>Главная</p></Link>
              <Link onClick={onClose} className='navigation__link' to='/movies'><p className='navigation__link-text'>Фильмы<div className='navigation__underline-movies' /></p></Link>
              <Link onClick={onClose} className='navigation__link' to='/saved-movies'><p className='navigation__link-text'>Сохранённые фильмы<div className='navigation__underline-movies' /></p></Link>
            </div>
            <Link onClick={onClose} className='navigation__link navigation__link-profile' to='/profile'><p className='navigation__link-text navigation__link-text_active'>Аккаунт</p><img className='navigation__profile-image' src={profileImage} alt='значок профиля' /></Link>
          </Route>
        </div>
      </div >
      <button onClick={onClose} className='navigation__overlay' type='button' />
    </div>
  )
}

export default Navigation;