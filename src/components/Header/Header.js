import logoLoggedOut from '../../images/logo-unlogged.svg';
import logoLoggedIn from '../../images/header-logo.svg';
import profileImage from '../../images/profile.svg';
import { Link } from 'react-router-dom';
import './Header.css'

function Header({ loggedIn }) {

  return (
    <header className={`header ${loggedIn ? "header_loggedin" : ""}`}>
      <img className="header__logo" src={loggedIn ? logoLoggedIn : logoLoggedOut} alt="Логотип сайта" />

      {!loggedIn ?
        <div className="header__links">
          <Link className="header__link header__link_signup" to="/signup"><p className="header__link-text">Регистрация</p></Link>
          <Link className="header__link header__link_signin" to="/signin"><p className="header__link-text">Войти</p></Link>
        </div>
        :
        <div className="header__navigation">
          <Link className="header__link header__link_loggedin" to="/movies"><p className="header__link-text header__link-text_movies">Фильмы</p></Link>
          <Link className="header__link header__link_loggedin" to="/saved-movies"><p className="header__link-text header__link-text_saved-movies">Сохранённые фильмы</p></Link>
          <Link className="header__link header__link_loggedin" to="/profile"><p className="header__link-text header__link-text_profile">Аккаунт</p><img className="header__profile-image" src={profileImage} alt="значок профиля" /></Link>
        </div>}
    </header >
  )
}

export default Header;