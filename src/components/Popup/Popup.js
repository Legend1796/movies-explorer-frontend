import { Link, Route } from 'react-router-dom';
import '../Popup/Popup.css';

function Popup({ onClose, isOpen }) {
  return (
    <div className={`popup popup_full-size ${isOpen && 'popup_opened'}`} >
      <button onClick={onClose} className="popup__overlay" />
      <div className='header__navigation'>
        <Route path="/movies">
          <Link className='header__link header__link_loggedin header__link_active' to='/movies'><p className='header__link-text header__link-text_movies'>Фильмы</p></Link>
          <Link className='header__link header__link_loggedin' to='/saved-movies'><p className='header__link-text header__link-text_saved-movies'>Сохранённые фильмы</p></Link>
          <Link className='header__link header__link_loggedin' to='/profile'><p className='header__link-text header__link-text_profile'>Аккаунт</p><img className='header__profile-image' src={profileImage} alt='значок профиля' /></Link>
        </Route>
        <Route path="/saved-movies">
          <Link className='header__link header__link_loggedin' to='/movies'><p className='header__link-text header__link-text_movies'>Фильмы</p></Link>
          <Link className='header__link header__link_loggedin header__link_active' to='/saved-movies'><p className='header__link-text header__link-text_saved-movies'>Сохранённые фильмы</p></Link>
          <Link className='header__link header__link_loggedin' to='/profile'><p className='header__link-text header__link-text_profile'>Аккаунт</p><img className='header__profile-image' src={profileImage} alt='значок профиля' /></Link>
        </Route>
        <Route path="/profile">
          <Link className='header__link header__link_loggedin' to='/movies'><p className='header__link-text header__link-text_movies'>Фильмы</p></Link>
          <Link className='header__link header__link_loggedin' to='/saved-movies'><p className='header__link-text header__link-text_saved-movies'>Сохранённые фильмы</p></Link>
          <Link className='header__link header__link_loggedin' to='/profile'><p className='header__link-text header__link-text_profile'>Аккаунт</p><img className='header__profile-image' src={profileImage} alt='значок профиля' /></Link>
        </Route>
      </div>
    </div >
  )
}

export default Popup;