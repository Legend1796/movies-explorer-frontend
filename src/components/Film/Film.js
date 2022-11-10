import React from 'react';
import saveOn from '../../images/likeOn.svg';
import saveOff from '../../images/likeOff.svg';
import deletefilm from '../../images/deletefilm.svg';
import { Route } from 'react-router-dom';

function Film({ filmInfo, onFilmSave, onFilmDelete, savedFilms, savedMovies }) {

  const isSaved = savedMovies.some((i) => i.movieId === filmInfo.id);
  console.log(savedMovies)

  function handleFilmSave() {
    onFilmSave(filmInfo);
  }

  function handlefilmDelete() {
    onFilmDelete(filmInfo);
  }

  function durationFilmToHours(duration) {
    if (duration <= 60) {
      return (`${duration} минут`)
    } else {
      return (`${Math.floor(duration / 60)}ч ${duration - Math.floor(duration / 60) * 60}м`)
    }
  }


  return (
    <li className='element'>
      <div className='element__container'>
        <div className='element__rectangle'>
          <h2 className='element__title'>{filmInfo.nameRU}</h2>
          <p className='element__time'>{durationFilmToHours(filmInfo.duration)}</p>
        </div>
        <a className='element__trailer-link' href={filmInfo.trailerLink} target='_blank' rel='noopener noreferrer'>
          <img className='element__image' src={savedFilms ? filmInfo.image : `https://api.nomoreparties.co/${filmInfo.image.url}`} alt='Обложка фильма' />
        </a>
        <Route path='/movies'>
          <button className='element__button' type='button' disabled={!isSaved}>
            <img className='element__save' src={isSaved ? saveOn : saveOff} onClick={handleFilmSave} aria-label='В избранное' />
          </button>
        </Route>
        <Route path='/saved-movies'>
          <button className='element__button' type='button'>
            <img className='element__save' src={deletefilm} onClick={handlefilmDelete} aria-label='В избранное' />
          </button>
        </Route>
      </div>
    </li>
  )
}

export default Film;