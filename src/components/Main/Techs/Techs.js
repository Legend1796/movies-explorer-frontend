import '../Techs/Techs.css'

function Techs() {

  return (
    <section className='techs' id='techs'>
      <h2 className='main__title'>Технологии</h2>
      <div className='main__underline'></div>
      <h3 className='techs__subtitle'>7 технологий</h3>
      <p className='techs__paragraph'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте</p>
      <ul className='techs__technologys'>
        <li className='tech__technology'>
          <p className='tech__text'>HTML</p>
        </li>
        <li className='tech__technology'>
          <p className='tech__text'>CSS</p>
        </li>
        <li className='tech__technology'>
          <p className='tech__text'>JS</p>
        </li>
        <li className='tech__technology'>
          <p className='tech__text'>Git</p>
        </li>
        <li className='tech__technology'>
          <p className='tech__text'>React</p>
        </li>
        <li className='tech__technology'>
          <p className='tech__text'>Express.js</p>
        </li>
        <li className='tech__technology'>
          <p className='tech__text'>mongoDB</p>
        </li>
      </ul>
    </section >
  )
}

export default Techs;