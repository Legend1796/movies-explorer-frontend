function Footer() {
  return (
    <footer className="footer">
      <p className="footer__paragrapf">Учебный проект Яндекс.Практикум x BeatFilm</p>
      <div className="footer__underline" />
      <div className="footer__table">
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <div className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

    </footer>
  )

}

export default Footer;