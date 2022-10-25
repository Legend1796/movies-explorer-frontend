import React from 'react';
import saveOn from '../../images/likeOn.svg';
import saveOff from '../../images/likeOff.svg';
import deletefilm from '../../images/deletefilm.svg';
import { Route } from 'react-router-dom';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Film({ filmInfo, onFilmSave, onFilmDelete }) {
  // const currentUser = React.useContext(CurrentUserContext);

  // const isSaved = filmInfo.owner.some(i => i._id === currentUser._id);

  const [isSaved, setIsSaved] = React.useState(false);

  function handlefilmSave() {
    onFilmSave(filmInfo);
    setIsSaved(true);
  }

  function handlefilmDelete() {
    onFilmDelete(filmInfo);
    setIsSaved(false);
  }

  return (
    <li className='element'>
      <div className='element__container'>
        <div className='element__rectangle'>
          <h2 className='element__title'>{filmInfo.name}</h2>
          <p className='element__time'>{filmInfo.duration}</p>
        </div>
        <img className='element__image' src={filmInfo.link} alt='Фото места' />
        <Route path='/movies'>
          <button className='element__button'>
            <img className='element__save' src={isSaved ? saveOn : saveOff} onClick={handlefilmSave} type='button' aria-label='В избранное' />
          </button>
        </Route>
        <Route path='/saved-movies'>
          <button className='element__button'>
            <img className='element__save' src={deletefilm} onClick={handlefilmDelete} type='button' aria-label='В избранное' />
          </button>
        </Route>
      </div>
    </li>
  )
}

export default Film;