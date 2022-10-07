import logo from '../../../images/promo-logo.svg';
import { Link, Route } from 'react-router-dom';
function Promo() {

  return (
    <header className="promo">
      <img className="promo__logo" src={logo} alt="Логотип сайта" />
      <Route path="/signup">
        <Link className="promo__link" to="signin">Войти</Link>
      </Route>
      <Route path="/signin">
        <Link className="promo__link" to="signup">Регистрация</Link>
      </Route>
    </header>
  )
}

export default Promo;