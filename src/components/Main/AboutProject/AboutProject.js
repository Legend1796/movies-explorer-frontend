import '../AboutProject/AboutProject.css'

function AboutProject() {

  return (
    <section className='aboutproject' id='aboutproject'>
      <h2 className='main__title'>О проекте</h2>
      <div className='main__underline'></div>
      <div className='table'>
        <ul className='table__list'>
          <li className='table__cell'>
            <h3 className='table__heading'>Дипломный проект включал 5 этапов</h3>
            <p className='table__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки</p>
          </li>
          <li className='table__cell'>
            <h3 className='table__heading'>На выполнение диплома ушло 5 недель</h3>
            <p className='table__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься</p>
          </li>
        </ul>
      </div>
      <div className='aboutproject__table'>
        <div className='aboutproject__table-cell'>
          <h4 className='aboutproject__table-heading aboutproject__table-heading_color_green'>1 неделя</h4>
          <p className='aboutproject__table-text'>Back-end</p>
        </div>
        <div className='aboutproject__table-cell aboutproject__table-cell_grid'>
          <h4 className='aboutproject__table-heading aboutproject__table-heading_color_grey'>4 недели</h4>
          <p className='aboutproject__table-text'>Front-end</p>
        </div>
      </div>
    </section >
  )
}

export default AboutProject;