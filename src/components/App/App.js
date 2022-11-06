import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Navigation from '../Navigation/Navigation';
import { initialFilms } from '../../utils/initialFilms';
import { savedMovies } from '../../utils/savedMovies';
import logoLoggedIn from '../../images/header-logo.svg';
import profileImage from '../../images/profile.svg';
import navigationBtn from '../../images/navigation-btn.svg';
import closeNavigationBtn from '../../images/closePopupBtn.svg';
import allowedImage from '../../images/Allowed.svg'
import deniedImage from '../../images/Denied.svg'
import * as auth from '../../utils/auth';
import mainApi from '../../utils/MainApi';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/MoviesApi';


function App() {
  const [currentUser, setUserInfo] = React.useState({ name: '', email: '' });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [openNavigation, setOpenNavigation] = React.useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [accesMessage, setAccesMessage] = React.useState('');
  const [accessImage, setAccessImage] = React.useState('');
  const history = useHistory();
  const isOpen = isInfoTooltipOpen || openNavigation;

  React.useEffect(() => {
    if (loggedIn === true) {
      setIsLoading(true);

      Promise.all([
        mainApi.getUserInfo(),
        moviesApi.getMovies()])
        .then(([info, movies]) => {
          setUserInfo(info);
          setMovies(movies);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))
    };
  }, [loggedIn]);

  function setMovies(movies) {
    movies.map((movie) => (localStorage.setItem(movie.nameRU.toLowerCase(), movie)))
  }

  function handleFilmSearch(value) {
    setIsLoading(true);
    console.log(value);
    setIsLoading(false);
  }

  function handleExitProfile() {
    setLoggedIn(false);
    history.push('/main');
  }

  function handleOpenNavigation() {
    setOpenNavigation(true);
  }

  function onAsseccDenied() {
    setAccesMessage('Что-то пошло не так!\nПопробуйте ещё раз.');
    setAccessImage(deniedImage);
    setInfoTooltipOpen(true);
  }

  function onAsseccAllowed() {
    setAccesMessage('Вы успешно зарегистрировались!');
    setAccessImage(allowedImage);
    setInfoTooltipOpen(true);
  }

  function onRegister({ name, email, password }) {
    setIsLoading(true);
    auth.register(name, email, password)
      .then((res) => {
        onAsseccAllowed();
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch(() => onAsseccDenied())
      .finally(() => setIsLoading(false))
  }

  function onLoginIn({ email, password }) {
    setIsLoading(true);
    auth.autorise(email, password)
      .then((res) => {
        console.log(res);
        onAsseccAllowed();
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch(() => onAsseccDenied())
      .finally(() => setIsLoading(false))
  }

  function handleUpdateUser(userData) {
    setIsLoading(true);
    mainApi.setUserInfo(userData)
      .then((res) => {
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }

  function handleCloseAllPopups() {
    setInfoTooltipOpen(false);
    setOpenNavigation(false);
  }

  React.useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        handleCloseAllPopups();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isOpen])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <ProtectedRoute path='/movies' loggedIn={loggedIn} filmSearch={handleFilmSearch} exitProfile={handleExitProfile} component={Movies} initialFilms={initialFilms} openNavigation={handleOpenNavigation} navigationBtn={navigationBtn} profileImage={profileImage} logoLoggedIn={logoLoggedIn} />
          <ProtectedRoute path='/saved-movies' loggedIn={loggedIn} exitProfile={handleExitProfile} component={SavedMovies} savedFilms={savedMovies} openNavigation={handleOpenNavigation} navigationBtn={navigationBtn} profileImage={profileImage} logoLoggedIn={logoLoggedIn} />
          <Route path='/signup'>
            <Register onRegister={onRegister} />
          </Route>
          <Route path='/signin'>
            <Login onLoginIn={onLoginIn} />
          </Route>
          <Route path='/profile'>
            <Profile loggedIn={loggedIn} editProfile={handleUpdateUser} submitButtonText='Сохранить' exitProfile={handleExitProfile} openNavigation={handleOpenNavigation} navigationBtn={navigationBtn} profileImage={profileImage} logoLoggedIn={logoLoggedIn} />
          </Route>
          <Route path="/main">
            <Header loggedIn={loggedIn} openNavigation={handleOpenNavigation} navigationBtn={navigationBtn} profileImage={profileImage} logoLoggedIn={logoLoggedIn} />
            <Main />
            <Footer />
          </Route>
          <Route exact path='/'>
            {loggedIn ? <Redirect to='/movies' /> : <Redirect to='/main' />}
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Navigation profileImage={profileImage} exitProfile={handleExitProfile} closeNavigationBtn={closeNavigationBtn} onClose={handleCloseAllPopups} isOpen={openNavigation} />
        <InfoTooltip isOpen={isInfoTooltipOpen} onClose={handleCloseAllPopups} name="access-message" title={accesMessage} image={accessImage} />
        <Preloader isLoading={isLoading} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;