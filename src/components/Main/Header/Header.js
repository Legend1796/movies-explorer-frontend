import logo from '../../../images/logo-unlogged.svg';
import { Link, Route } from 'react-router-dom';
import './Header.css'

function Header({ loggedIn }) {

  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Логотип сайта" />
        <div className="header__links">
          <Route path="/main">
            <Link className="header__link header__link_signup" to="signup"><p className="header__link-text">Регистрация</p></Link>
            <Link className="header__link header__link_signin" to="signin"><p className="header__link-text">Войти</p></Link>
          </Route>
        </div>
      </div>
    </header >
  )
}

export default Header;
        // <Route path="/movies">
        //   <Link className="header__link" to="movies">Фильмы</Link>
        //   <Link className="header__link" to="saved-movies">Сохранённые фильмы</Link>
        //   <Link className="header__link" to="profile">Аккаунт</Link>
        // </Route>