import React from 'react';
import { Link, Route } from 'react-router-dom';

function NotFound() {

  return (
    <div className='not-found'>
      <Route path="*">
        <h3 className='not-found__title'>404</h3>
        <p className='not-found__text'>Страница не найдена</p>
        <Link className='button-to-main' to='/main'>Назад</Link>
      </Route>
    </div>
  )
}

export default NotFound;