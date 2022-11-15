import find from '../../images/find.svg';
import smalltumbOn from '../../images/smalltumb-active.svg';
import smalltumbOff from '../../images/smalltumboff.svg';
import React from 'react';
import Film from '../Film/Film';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function SavedMovies({
  loggedIn,
  exitProfile,
  onFilmDelete,
  savedFilms,
  openNavigation,
  navigationBtn,
  profileImage,
  logoLoggedIn,
  logoLoggedOut,
  savedFilmSearch,
  changeShortFilmState,
  shortFilmsActive,
  isNeedMoreButton,
  addMoreMovies,
  searchSavedMoviesValue,
  foundNothing
}) {

  const [value, setValue] = React.useState(searchSavedMoviesValue);

  function handleSubmit(e) {
    e.preventDefault();
    savedFilmSearch(value);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  function deletefilm(filmInfo) {
    onFilmDelete(filmInfo);
  }

  function handleChangeShortFilmActivetily() {
    changeShortFilmState();
  }

  function handleOpenNavigation() {
    openNavigation();
  }

  return (
    <>
      <Header
        loggedIn={loggedIn}
        exitProfile={exitProfile}
        openNavigation={handleOpenNavigation}
        navigationBtn={navigationBtn}
        profileImage={profileImage}
        logoLoggedIn={logoLoggedIn}
        logoLoggedOut={logoLoggedOut}
      />
      <section>
        <div className='movies__search'>
          <form onSubmit={handleSubmit} className='popup__form movies__container'>
            <div className='movies__search-block'>
              <input onChange={handleChange} value={value} className='movies__input' id='savedFilmSearch' name='savedFilmSearch' type='text' placeholder='Фильм' maxLength='70' />
              <button className='movies__search-button' type='submit'><img className='movies__search-image' src={find} alt='Кнопка поиска' /></button>
            </div>
            <div className='movies__short-container'>
              <p className='movies__short-title'>Короткометражки</p>
              <button className='movies__short-button' type='button'><img onClick={handleChangeShortFilmActivetily} className='movies__short-image' src={shortFilmsActive ? smalltumbOn : smalltumbOff} alt='Кнопка поиска' /></button>
            </div>
          </form>
          <div className='movies__underline' />
        </div>
      </section>
      <section>
        {savedFilms.length === 0
          ?
          <p className='elements__not-found'>{foundNothing}</p>
          :
          <ul className='elements'>
            {savedFilms.map((movie) => (
              <Film filmInfo={movie} onFilmDelete={deletefilm} key={movie._id} savedFilms={true} savedMovies={savedFilms} />
            ))}
          </ul>
        }
      </section>
      <section>
        <div className='movies__more'>
          <button className={`movies__more-button ${isNeedMoreButton ? 'movies__more-button_active' : ''}`} type='button' onClick={addMoreMovies}>Ещё</button>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default SavedMovies;