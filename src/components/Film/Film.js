import React from 'react';
import '../Film/Film.css';
import likeOn from '../../images/likeOn.svg';
import likeOff from '../../images/likeOff.svg';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Film({ filmInfo, onFilmLikeClick }) {
  // const currentUser = React.useContext(CurrentUserContext);

  // const isLiked = filmInfo.likes.some(i => i._id === currentUser._id);
  const [isLiked, setIsLiked] = React.useState(false);

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
          <img className='element__like' src={isLiked ? likeOn : likeOff} onClick={handlefilmLikeClick} type='button' aria-label='В избранное' />
        </div>
        <div className='element__underline' />
        <p className='element__time'>{filmInfo.duration}</p>
      </div>
    </li>
  )
}

export default Film;