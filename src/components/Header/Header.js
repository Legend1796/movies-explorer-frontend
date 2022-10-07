import logo from '../../images/header-logo.svg';
import { Link, Route } from 'react-router-dom';
function Header() {

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип сайта" />
      <Route path="/signup">
        <Link className="header__link" to="movies">Фильмы</Link>
      </Route>
      <Route path="/signin">
        <Link className="header__link" to="saved-movies">Сохранённые фильмы</Link>
      </Route>
      <Route path="/signin">
        <Link className="header__link" to="profile">Аккаунт</Link>
      </Route>
    </header>
  )
}

export default Header;