import React from 'react';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function NotFound() {

  const history = useHistory();
  function handleClickBack() {
    history.goBack();
  }

  return (
    <div className='not-found'>
      <Route path="*">
        <h3 className='not-found__title'>404</h3>
        <p className='not-found__text'>Страница не найдена</p>
        <button className='button-to-main' type='button' onClick={handleClickBack}>Назад</button>
      </Route>
    </div>
  )
}

export default NotFound;