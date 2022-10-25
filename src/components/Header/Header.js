import { Link, Route } from 'react-router-dom';

function Header({ loggedIn, exitProfile, openNavigation, navigationBtn, profileImage, logoLoggedIn }) {

  function loggedOut() {
    exitProfile();
  }
  return (
    <header className={`header ${loggedIn ? 'header_loggedin' : ''}`}>
      <Link onClick={loggedOut} className='navigation__link' to='/main'><img className='header__logo' src={logoLoggedIn} alt='Логотип сайта' /></Link>
      {!loggedIn ?
        <div className='header__links'>
          <Link className='header__link header__link_signup' to='/signup'><p className='header__link-text'>Регистрация</p></Link>
          <Link className='header__link header__link_signin' to='/signin'><p className='header__link-text'>Войти</p></Link>
        </div>
        :
        <>
          <button type='button' className='header__navigation-button' onClick={openNavigation}><img className='header__navigation-image' src={navigationBtn} alt='кнопка навигации' /></button>
          <div className='header__navigation'>
            <Route path="/movies">
              <Link className='header__link header__link_loggedin header__link_active' to='/movies'>Фильмы</Link>
              <Link className='header__link header__link_loggedin' to='/saved-movies'>Сохранённые фильмы</Link>
              <Link className='header__link header__link_loggedin header__link_profile' to='/profile'>Аккаунт<img className='header__profile-image' src={profileImage} alt='значок профиля' /></Link>
            </Route>
            <Route path="/saved-movies">
              <Link className='header__link header__link_loggedin' to='/movies'>Фильмы</Link>
              <Link className='header__link header__link_loggedin header__link_active' to='/saved-movies'>Сохранённые фильмы</Link>
              <Link className='header__link header__link_loggedin header__link_profile' to='/profile'>Аккаунт<img className='header__profile-image' src={profileImage} alt='значок профиля' /></Link>
            </Route>
            <Route path="/profile">
              <Link className='header__link header__link_loggedin' to='/movies'>Фильмы</Link>
              <Link className='header__link header__link_loggedin' to='/saved-movies'>Сохранённые фильмы</Link>
              <Link className='header__link header__link_loggedin header__link_profile header__link_active' to='/profile'>Аккаунт<img className='header__profile-image' src={profileImage} alt='значок профиля' /></Link>
            </Route>
          </div>
        </>}
    </header >
  )
}

export default Header;