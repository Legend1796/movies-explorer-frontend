import '../Promo/Promo.css'
import landingLogo from '../../../images/landing-logo.png';

function Promo() {

  return (
    <section className="promo">
      <img className="promo__logo" src={landingLogo} alt="Логотип промо" />
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки</h1>
    </section>
  )
}

export default Promo;