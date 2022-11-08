import find from '../../images/find.svg';
import smalltumbOn from '../../images/smalltumb-active.svg';
import smalltumbOff from '../../images/smalltumboff.svg';
import React from 'react';
import Film from '../Film/Film';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function Movies({ movies, loggedIn, exitProfile, onFilmSave, openNavigation, navigationBtn, profileImage, logoLoggedIn, logoLoggedOut, filmSearch, shortFilmsActive, changeShortFilmState }) {

  const { values, handleChange, errors, isValid, resetErrors } = useFormAndValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    filmSearch(values.filmSearch);
  }

  function filmSave(filmInfo) {
    onFilmSave(filmInfo);
  }

  function handleChangeShortFilmActivetily() {
    changeShortFilmState();
  }

  function handleOpenNavigation() {
    openNavigation();
  }

  React.useEffect(() => {
    resetErrors({ filmSearch: '' });
  }, []);

  return (
    <>
      <Header loggedIn={loggedIn} exitProfile={exitProfile} openNavigation={handleOpenNavigation} navigationBtn={navigationBtn} profileImage={profileImage} logoLoggedIn={logoLoggedIn} logoLoggedOut={logoLoggedOut} />
      <section>
        <div className='movies__search'>
          <form onSubmit={handleSubmit} className='popup__form movies__container'>
            <div className='movies__search-block'>
              <input onChange={handleChange} value={values.filmSearch || ''} className='movies__input' id='filmSearch' name='filmSearch' type='text' placeholder={!isValid ? errors.filmSearch : 'Фильм'} maxLength='70' required />
              <button className='movies__search-button' type='submit'><img className='movies__search-image' src={find} alt='Кнопка поиска' /></button>
            </div>
          </form>
          <div className='movies__short-container'>
            <p className='movies__short-title'>Короткометражки</p>
            <button className='movies__short-button' type='button'><img onClick={handleChangeShortFilmActivetily} className='movies__short-image' src={shortFilmsActive ? smalltumbOn : smalltumbOff} alt='Кнопка поиска' /></button>
          </div>
          <div className='movies__underline' />
        </div>
      </section>
      <section>
        {movies.length === 0
          ?
          <p className='elements__not-found'>Ничего не найдено</p>
          :
          <ul className='elements'>
            {movies.map((movie) => (
              <Film filmInfo={movie} onFilmSave={filmSave} key={movie.id} savedFilms={false} />
            ))}
          </ul>
        }
      </section>
      <section>
        <div className='movies__more'>
          <button className='movies__more-button' type='button'>Ещё</button>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Movies;