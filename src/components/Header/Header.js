import logoLoggedOut from '../../images/logo-unlogged.svg';
import logoLoggedIn from '../../images/header-logo.svg';
import { Link, Route } from 'react-router-dom';
import './Header.css'

function Header({ loggedIn }) {

  return (
    <header className={`header ${!loggedIn ? "header_loggedin" : ""}`}>
      <img className="header__logo" src={loggedIn ? logoLoggedIn : logoLoggedOut} alt="Логотип сайта" />
      <div className="header__links">
        <Route path="/main">
          <Link className="header__link header__link_signup" to="/signup"><p className="header__link-text">Регистрация</p></Link>
          <Link className="header__link header__link_signin" to="/signin"><p className="header__link-text">Войти</p></Link>
        </Route>
      </div>
    </header >
  )
}

export default Header;