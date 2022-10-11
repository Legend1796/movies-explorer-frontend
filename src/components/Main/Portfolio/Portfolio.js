import '../Portfolio/Portfolio.css'

function Portfolio() {

  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <div className="portfolio__title">Портфолио</div>
        <a className="portfolio__link" href="https://legend1796.github.io/how-to-learn/" target="_blank" rel="noopener noreferrer">Статичный сайт</a>
        <a className="portfolio__link" href="https://legend1796.github.io/russian-travel/" target="_blank" rel="noopener noreferrer">Адаптивный сайт</a>
        <a className="portfolio__link" href="https://github.com/Legend1796/react-mesto-auth" target="_blank" rel="noopener noreferrer">Одностраничное приложение</a>
      </div>
    </section >
  )
}

export default Portfolio;