import link from '../../../images/portfolio_link.svg';

function Portfolio() {

  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <div className='portfolio__title'>Портфолио</div>
        <div className='portfolio__links'>
          <div className='portfolio__link'>
            <p className='portfolio__link-text'>Статичный сайт</p>
            <a href='https://github.com/Legend1796/react-mesto-auth' target='_blank' rel='noopener noreferrer'><img className='portfolio__link-image' src={link} alt='Ссылка на ресурс' /></a>
          </div>
          <div className='portfolio__underline' />
          <div className='portfolio__link'>
            <p className='portfolio__link-text'>Адаптивный сайт</p>
            <a href='https://github.com/Legend1796/react-mesto-auth' target='_blank' rel='noopener noreferrer'><img className='portfolio__link-image' src={link} alt='Ссылка на ресурс' /></a>
          </div>
          <div className='portfolio__underline' />
          <div className='portfolio__link'>
            <p className='portfolio__link-text'>Одностраничное приложение</p>
            <a href='https://github.com/Legend1796/react-mesto-auth' target='_blank' rel='noopener noreferrer'><img className='portfolio__link-image' src={link} alt='Ссылка на ресурс' /></a>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Portfolio;