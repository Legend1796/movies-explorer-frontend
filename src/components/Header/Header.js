import logo from '../../images/header-logo.svg';
import { Link, Route } from 'react-router-dom';
function Header({ loggedIn }) {

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип сайта" />
      <div className={`header__links ${loggedIn ? "header__links_active" : ""}`}>
        <Route path="/signup">
          <Link className="header__link" to="movies">Фильмы</Link>
        </Route>
        <Route path="/signin">
          <Link className="header__link" to="saved-movies">Сохранённые фильмы</Link>
        </Route>
        <Route path="/signin">
          <Link className="header__link" to="profile">Аккаунт</Link>
        </Route>
      </div>
      <div className={`header__links ${!loggedIn ? "header__links_active" : ""}`}>
        <Route path="/signin">
          <Link className="header__link" to="signup">Регистрация</Link>
        </Route>
        <Route path="/signup">
          <Link className="header__link" to="signin">Войти</Link>
        </Route>
      </div>
    </header >
  )
}

export default Header;