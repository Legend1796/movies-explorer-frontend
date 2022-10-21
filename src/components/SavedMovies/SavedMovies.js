import find from '../../images/find.svg';
import smalltumbOn from '../../images/smalltumb-active.svg';
import smalltumbOff from '../../images/smalltumboff.svg';
import React from 'react';
import Film from '../Film/Film';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function SavedMovies({ loggedIn, onFilmDelete, savedFilms, openNavigation, navigationBtn, profileImage, logoLoggedIn, logoLoggedOut }) {
  const [shortFilmsActive, setShortFilmsActive] = React.useState(true);

  function deletefilm(filmInfo) {
    console.log(filmInfo);
    // onFilmDelete(filmInfo); // need to give on Api
  }

  function handleChangeShortFilmActivetily() {
    setShortFilmsActive(!shortFilmsActive);
  }

  function handleBottonSearchClick() {
    console.log('click');
  }

  function handleOpenNavigation() {
    openNavigation();
  }

  return (
    <>
      <Header loggedIn={loggedIn} openNavigation={handleOpenNavigation} navigationBtn={navigationBtn} profileImage={profileImage} logoLoggedIn={logoLoggedIn} logoLoggedOut={logoLoggedOut} />
      <section>
        <div className='movies__search'>
          <div className='movies__container'>
            <div className='movies__search-block'>
              <input className='movies__input' id='film-search' name='film-search' type='film-search' placeholder='Фильм' maxLength='70' required />
              <img onClick={handleBottonSearchClick} className='movies__search-image' src={find} alt='Кнопка поиска' />
            </div>
            <div className='movies__short-container'>
              <p className='movies__short-title'>Короткометражки</p>
              <img onClick={handleChangeShortFilmActivetily} className='movies__short-btn' src={shortFilmsActive ? smalltumbOn : smalltumbOff} alt='Кнопка поиска' />
            </div>
          </div>
          <div className='movies__underline' />
        </div>
      </section>
      <section>
        <ul className='elements'>
          {savedFilms.map((film) => (
            <Film filmInfo={film} onFilmDelete={deletefilm} key={film._id} />
          ))}
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

export default SavedMovies;