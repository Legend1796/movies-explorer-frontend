import find from '../../images/find.svg';
import smalltumbOn from '../../images/smalltumb-active.svg';
import smalltumbOff from '../../images/smalltumboff.svg';
import React from 'react';
import Film from '../Film/Film';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function Movies({ loggedIn, exitProfile, initialFilms, onFilmSave, openNavigation, navigationBtn, profileImage, logoLoggedIn, logoLoggedOut }) {
  const [shortFilmsActive, setShortFilmsActive] = React.useState(true);
  const { values, handleChange, errors, isValid, resetErrors } = useFormAndValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    // onRegister(values);
  }

  function filmSave(filmInfo) {
    console.log(filmInfo);
    // onFilmSave(filmInfo); // need to give on Api
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
          <form onSubmit={handleSubmit} className='popup__form movies__container'>
            <div className='movies__search-block'>
              <input onChange={handleChange} value={values.filmSearch || ''} className='movies__input' id='filmSearch' name='filmSearch' type='text' placeholder='Фильм' maxLength='70' required />
              <button className='movies__search-button' type='submit'><img className='movies__search-image' src={find} alt='Кнопка поиска' /></button>
            </div>
            <span className={`movies__input-error movies-input-error ${!isValid ? 'movies__input-error_active' : ''}`}>{errors.filmSearch}</span>
          </form>
          <div className='movies__short-container'>
            <p className='movies__short-title'>Короткометражки</p>
            <button className='movies__short-button' type='button'><img onClick={handleChangeShortFilmActivetily} className='movies__short-image' src={shortFilmsActive ? smalltumbOn : smalltumbOff} alt='Кнопка поиска' /></button>
          </div>
          <div className='movies__underline' />
        </div>
      </section>
      <section>
        <ul className='elements'>
          {initialFilms.map((film) => (
            <Film filmInfo={film} onFilmSave={filmSave} key={film._id} />
          ))}
        </ul>
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