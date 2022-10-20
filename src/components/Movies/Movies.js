import '../Movies/Movies.css';
import find from '../../images/find.svg';
import smalltumbOn from '../../images/smalltumb-active.svg';
import smalltumbOff from '../../images/smalltumboff.svg';
import Header from '../Header/Header';
import React from 'react';
import Film from '../Film/Film';
import Footer from '../Footer/Footer';
import deletefilm from '../../images/deletefilm.svg';
import { Route } from 'react-router-dom';


function Movies({ loggedIn, films, onFilmSave, savedFilms }) {
  const [shortFilmsActive, setShortFilmsActive] = React.useState(true);

  function filmSave(filmInfo) {
    console.log(filmInfo);
    // onFilmSave(filmInfo); // need to give on Api
  }

  function handleChangeShortFilmActivetily() {
    setShortFilmsActive(!shortFilmsActive);
  }

  function handleBottonSearchClick() {
    console.log('click');
  }

  function handleActionWithFilm() {

  }
  return (
    <>
      <section>
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
        </div>
      </section>
      <section>
        <ul className='elements'>
          <Route path="/movies">
            {films.map((film) => (
              <Film filmInfo={film} actionWithFilm={handleActionWithFilm} onFilmSave={filmSave} key={film._id} />
            ))}
          </Route>
          <Route path="/saved-movies">
            {savedFilms.map((film) => (
              <Film filmInfo={film} actionWithFilm={deletefilm} onFilmSave={filmSave} key={film._id} />
            ))}
          </Route>
        </ul>
      </section>
      <section>
        <div className='movies__more'>
          <button className='movies__more-button'>Ещё</button>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Movies;