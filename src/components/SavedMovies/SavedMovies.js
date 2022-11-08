import find from '../../images/find.svg';
import smalltumbOn from '../../images/smalltumb-active.svg';
import smalltumbOff from '../../images/smalltumboff.svg';
import React from 'react';
import Film from '../Film/Film';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function SavedMovies({ loggedIn, exitProfile, onFilmDelete, savedFilms, openNavigation, navigationBtn, profileImage, logoLoggedIn, logoLoggedOut, savedFilmSearch }) {
  const [shortFilmsActive, setShortFilmsActive] = React.useState(true);
  const { values, handleChange, errors, isValid, resetErrors } = useFormAndValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    savedFilmSearch(values.savedFilmSearch);
  }

  function deletefilm(filmInfo) {
    console.log(filmInfo);
    // onFilmDelete(filmInfo); // need to give on Api
  }

  function handleChangeShortFilmActivetily() {
    setShortFilmsActive(!shortFilmsActive);
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
          <form className='popup__form movies__container'>
            <div className='movies__search-block'>
              <input onChange={handleChange} value={values.savedFilmSearch || ''} className='movies__input' id='savedFilmSearch' name='savedFilmSearch' type='text' placeholder={!isValid ? errors.savedFilmSearch : 'Фильм'} maxLength='70' required />
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
          <p className='elements__not-found'>Ничего не найдено</p>
          :
          <ul className='elements'>
            {savedFilms.map((movie) => (
              <Film filmInfo={movie} onFilmDelete={deletefilm} key={movie._id} savedFilms={true} />
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

export default SavedMovies;