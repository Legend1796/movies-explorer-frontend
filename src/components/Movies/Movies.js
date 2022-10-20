import '../Movies/Movies.css';
import find from '../../images/find.svg';
import smalltumbOn from '../../images/smalltumb-active.svg';
import smalltumbOff from '../../images/smalltumboff.svg';
import Header from '../Header/Header';
import React from 'react';
import Film from '../Film/Film';

function Movies({ loggedIn, initialFilms, onFilmLike }) {
  const [shortFilmsActive, setShortFilmsActive] = React.useState(true);

  function filmLikeClick(filmInfo) {
    onFilmLike(filmInfo); // need to give on Api
  }

  function handleChangeShortFilmActivetily() {
    setShortFilmsActive(!shortFilmsActive);
  }

  function handleBottonSearchClick() {
    console.log('click');
  }

  return (
    <>
      <section className='movies'>
        <Header loggedIn={loggedIn} />
        <div className='movies__search'>
          <div className='movies__container'>
            <div className='movies__search-block'>
              <input className='movies__input' id='film-search' name='film-search' type='film-search' placeholder='Фильм' maxLength='70' required />
              <img onClick={handleBottonSearchClick} className='movies__search-image' src={find} alt='Кнопка поиска' />
            </div>
            <p className='movies__short-title'>Короткометражки</p>
            <img onClick={handleChangeShortFilmActivetily} className='movies__short-btn' src={shortFilmsActive ? smalltumbOn : smalltumbOff} alt='Кнопка поиска' />
          </div>
          <div className='movies__underline' />
        </div >
      </section>
      <ul className="elements">
        {initialFilms.map((film) => (
          <Film filmInfo={film} onFilmLikeClick={filmLikeClick} key={film._id} />
        ))}
      </ul>
    </>
  )
}

export default Movies;