function Promo() {

  return (
    <section className='promo'>
      <div className='promo__background'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <div className='promo__links'>
          <a className='promo__link' href='#aboutproject'><p className='promo__link-text'>О проекте</p></a>
          <a className='promo__link' href='#techs'><p className='promo__link-text'>Технологии</p></a>
          <a className='promo__link' href='#aboutme'><p className='promo__link-text'>Студент</p></a>
        </div>
      </div>
    </section>
  )
}

export default Promo;