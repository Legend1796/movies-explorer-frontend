function Footer() {
  return (
    <footer className="footer">
      <p className="footer__paragrapf">Учебный проект Яндекс.Практикум x BeatFilm</p>
      <div className="footer__copyright"></div>
      <div className="footer__underline">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <div className="footer__links">
          <a className="footer__copyright__link" href="https://practicum.yandex.ru">Яндекс.Практикум</a>
          <a className="footer__copyright__link" href="https://github.com">GitHub</a>
          <a className="footer__copyright__link" href="http://www.facebook.com">Facebook</a>
        </div>
      </div>
    </footer>
  )

}

export default Footer;