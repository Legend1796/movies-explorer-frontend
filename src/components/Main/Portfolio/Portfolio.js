import link from '../../../images/portfolio_link.svg';

function Portfolio() {

  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <div className='portfolio__title'>Портфолио</div>
        <ul className='portfolio__links'>
          <li className='portfolio__links-element'>
            <a className='portfolio__link' href='https://github.com/Legend1796/react-mesto-auth' target='_blank' rel='noopener noreferrer'>
              <p className='portfolio__link-text'>Статичный сайт</p>
              <img className='portfolio__link-image' src={link} alt='Ссылка на ресурс' />
            </a>
            <div className='portfolio__underline' />
          </li>
          <li className='portfolio__links-element'>
            <a className='portfolio__link' href='https://github.com/Legend1796/react-mesto-auth' target='_blank' rel='noopener noreferrer'>
              <p className='portfolio__link-text'>Адаптивный сайт</p>
              <img className='portfolio__link-image' src={link} alt='Ссылка на ресурс' />
            </a>
            <div className='portfolio__underline' />
          </li>
          <li className='portfolio__links-element'>
            <a className='portfolio__link' href='https://github.com/Legend1796/react-mesto-auth' target='_blank' rel='noopener noreferrer'>
              <p className='portfolio__link-text'>Одностраничное приложение</p>
              <img className='portfolio__link-image' src={link} alt='Ссылка на ресурс' />
            </a>
          </li>
        </ul>
      </div>
    </section >
  )
}

export default Portfolio;