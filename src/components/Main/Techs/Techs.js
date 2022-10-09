function Techs() {

  return (
    <section>
      <h2 className="main__title">Технологии</h2>
      <div className="main__underline"></div>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте</p>
      <ui className="techs__list">
        <li className="techs__technology">
          <img src={html} alt="HTML5" />
          <img src={html ???????} alt="Логотип сайта" />
          <img src={js} alt="JavaScript" />
          <img src={react} alt="React" />
          <img src={git} alt="Git" />
          <img src={express} alt="Express" />
          <img src={mongodb} alt="MongoDB" />
        </li>
      </ui>
    </section >
  )
}

export default Techs;