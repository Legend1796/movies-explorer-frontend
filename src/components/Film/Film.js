import React from 'react';
import '../Film/Film.css';
import saveOn from '../../images/likeOn.svg';
import saveOff from '../../images/likeOff.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Film({ filmInfo, onFilmSave, actionWithFilm }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isSaved = filmInfo.owner.some(i => i._id === currentUser._id);

  // const [isSaved, setIsSaved] = React.useState(false);

  function handlefilmSave() {
    onFilmSave(filmInfo);
    // setIsSaved(true);
  }

  return (
    <li className='element'>
      <div className='element__container'>
        <img className='element__image' src={filmInfo.link} alt='Фото места' />
        <div className='element__rectangle'>
          <h2 className='element__title'>{filmInfo.name}</h2>
          <img className='element__save' src={isSaved ? saveOn : saveOff} onClick={handlefilmSave} type='button' aria-label='В избранное' />
        </div>
        <div className='element__underline' />
        <p className='element__time'>{filmInfo.duration}</p>
      </div>
    </li>
  )
}

export default Film;