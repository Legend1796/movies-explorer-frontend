import React from 'react';
import '../Film/Film.css';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Film({ filmInfo, onFilmLikeClick }) {
  // const currentUser = React.useContext(CurrentUserContext);

  // const isLiked = filmInfo.likes.some(i => i._id === currentUser._id);
  const [isLiked, setIsLiked] = React.useState(false);
  const filmLikeButtonClassName = `element__like ${isLiked ? 'element__like_active' : ''}`;

  function handlefilmLikeClick() {
    onFilmLikeClick(filmInfo);
    setIsLiked(!isLiked);
  }

  return (
    <li className='element'>
      <div className='element__container'>
        <img className='element__image' src={filmInfo.link} alt='Фото места' />
        <div className='element__rectangle'>
          <h2 className='element__title'>{filmInfo.name}</h2>
          <button className={filmLikeButtonClassName} onClick={handlefilmLikeClick} type='button' aria-label='В избранное'></button>
        </div>
        <div className='elemet__underline' />
        <div className='elemet__time' />
      </div>
    </li>
  )
}

export default Film;