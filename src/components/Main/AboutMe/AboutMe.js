import '../AboutMe/AboutMe.css';
import '../Main.css';
import photo from '../../../images/photo.png'

function AboutMe() {

  return (
    <section className="aboutme">
      <h2 className="main__title">Студент</h2>
      <div className="main__underline"></div>
      <div className="aboutme__two-columns">
        <div className="aboutme__column">
          <div className="aboutme__column-text">
            <h3 className="aboutme__title">Игорь</h3>
            <p className="aboutme__subtitle">Начинающий frontend-разработчик, 25 лет</p>
            <p className="aboutme__paragraph">Я живу в Санкт-Петербурге, имею высшее инженерное образование. У меня есть жена
              и сын. Я люблю слушать музыку, а ещё увлекаюсь хоккеем. Недавно начал кодить. После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами.</p>
          </div>
          <a className="aboutme__link" href="https://github.com/Legend1796" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <img className="aboutme__photo" src={photo} alt="Фото студента" />
      </div>
    </section >
  )
}

export default AboutMe;