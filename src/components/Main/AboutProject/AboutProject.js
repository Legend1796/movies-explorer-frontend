import '../AboutProject/AboutProject.css'

function AboutProject() {

  return (
    <section className="aboutproject">
      <h2 className="main__title">О проекте</h2>
      <div className="main__underline"></div>
      <div className="table">
        <ul class="table__list">
          <li class="table__cell">
            <h3 class="table__heading">Дипломный проект включал 5 этапов</h3>
            <p class="table__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки</p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">На выполнение диплома ушло 5 недель</h3>
            <p class="table__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься</p>
          </li>
        </ul>
      </div>
      <div className="aboutproject__table">
        <div class="aboutproject__table-cell">
          <h4 class="aboutproject__table-heading aboutproject__table-heading_color_green">1 неделя</h4>
          <p class="aboutproject__table-text">Back-end</p>
        </div>
        <div class="aboutproject__table-cell aboutproject__table-cell_grid">
          <h4 class="aboutproject__table-heading aboutproject__table-heading_color_grey">4 недели</h4>
          <p class="aboutproject__table-text">Front-end</p>
        </div>
      </div>
    </section >
  )
}

export default AboutProject;