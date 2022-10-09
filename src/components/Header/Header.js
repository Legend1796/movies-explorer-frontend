import logo from '../../images/header-logo.svg';
import { Link, Route } from 'react-router-dom';
function Header({ loggedIn }) {

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип сайта" />
      <div className="header__links">
        <Route path="/movies">
          <Link className="header__link" to="movies">Фильмы</Link>
          <Link className="header__link" to="saved-movies">Сохранённые фильмы</Link>
          <Link className="header__link" to="profile">Аккаунт</Link>
        </Route>
        <Route path="/main">
          <Link className="header__link" to="signin">Войти</Link>
          <Link className="header__link" to="signup">Регистрация</Link>
        </Route>
      </div>
    </header >
  )
}

export default Header;