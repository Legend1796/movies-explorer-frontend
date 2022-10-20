import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Film({ }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = filmInfo.owner._id === currentUser._id;
  // const filmDeleteButtonClassName = (
  //   `element__delete-urn ${isOwn ? 'element__delete-urn_active' : ''}`
  // );

  const isLiked = filmInfo.likes.some(i => i._id === currentUser._id);
  const filmLikeButtonClassName = `element__like ${isLiked ? 'element__like_active' : ''}`;

  // function handleClick() {
  //   onfilmClick(filmInfo);
  // }
  function handlefilmLikeClick() {
    onfilmLikeClick(filmInfo);
  }
  function handlefilmDeleteClick() {
    onfilmDelete(filmInfo);
  }

  return (
    <li className="element">
      <img className="element__image" src={filmInfo.link} alt="Фото места" />
      <button onClick={handleClick} className="element__image-btn" type="button" aria-label="На весь экран фото места"></button>
      <button className={filmDeleteButtonClassName} onClick={handlefilmDeleteClick} type="button" aria-label="Удалить карточку места"></button>
      <div className="element__rectangle">
        <h2 className="element__title">{filmInfo.name}</h2>
        <div className="element__like-container">
          <button className={filmLikeButtonClassName} onClick={handlefilmLikeClick} type="button" aria-label="В избранное"></button>
          <p className="element__count-likes">{filmInfo.likes.length}</p>
        </div>

      </div>
    </li>
  )
}

export default Film;