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
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [openNavigation, setOpenNavigation] = React.useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [shortFilmsActive, setShortFilmsActive] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [accesMessage, setAccesMessage] = React.useState('');
  const [accessImage, setAccessImage] = React.useState('');
  const [searchMoviesValue, setSearchMoviesValue] = React.useState('');
  const [searchSavedMoviesValue, setSearchSavedMoviesValue] = React.useState('');
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const history = useHistory();
  const isOpen = isInfoTooltipOpen || openNavigation;

  React.useEffect(() => {
    if (loggedIn === true) {
      setIsLoading(true);
      Promise.all([
        mainApi.getUserInfo(),
        mainApi.getSavedMovies()])
        .then(([info, movies]) => {
          setCurrentUser(info);
          setSavedMovies(movies);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))
    };
  }, [loggedIn]);

  React.useEffect(() => {
    setIsLoading(true);
    moviesApi.getMovies()
      .then((res) => {
        const resultSearch = filterMovies(searchMoviesValue, res)
        setMovies(resultSearch);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }, [searchMoviesValue, shortFilmsActive]);

  React.useEffect(() => {
    if (loggedIn === true) {
      setIsLoading(true);
      mainApi.getSavedMovies()
        .then((res) => {
          const resultSearch = filterMovies(searchSavedMoviesValue, res)
          setSavedMovies(resultSearch);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))
    };
  }, [searchSavedMoviesValue]);

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
  }, [isOpen]);

  function onRegister({ name, email, password }) {
    setIsLoading(true);
    auth.register(name, email, password)
      .then((res) => {
        onAsseccAllowed();
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch(() => onError())
      .finally(() => setIsLoading(false))
  }

  function onLoginIn({ email, password }) {
    setIsLoading(true);
    auth.autorise(email, password)
      .then((res) => {
        onAsseccAllowed();
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch(() => onError())
      .finally(() => setIsLoading(false))
  }

  function handleUpdateUser(userData) {
    setIsLoading(true);
    mainApi.setUserInfo(userData)
      .then((res) => {
        setCurrentUser(res);
        savedProfile();
      })
      .catch((err) => onError())
      .finally(() => setIsLoading(false))
  }
  function handleExitProfile() {
    setIsLoading(true);
    mainApi.signOut()
      .then((res) => {
        handleExitToMain();
        setCurrentUser({});
        localStorage.clear();
        setLoggedIn(false);
      })
      .catch((err) => onError())
      .finally(() => setIsLoading(false))
  }

  function handleFilmSave(filmInfo) {
    setIsLoading(true);
    mainApi.saveMovie(filmInfo)
      .then((res) => {
        console.log(res);
        savedFilm();
      })
      .catch((err) => onError())
      .finally(() => setIsLoading(false))
  }

  function handleFilmDelete(filmInfo) {
    setIsLoading(true);
    mainApi.deleteMovie(filmInfo._id)
      .then((res) => {
        setSavedMovies((state) => state.filter(c => c._id !== filmInfo._id));
      })
      .catch((err) => onError())
      .finally(() => setIsLoading(false))
  }

  function handleOpenNavigation() {
    setOpenNavigation(true);
  }

  function onError() {
    setAccesMessage('Что-то пошло не так!\nПопробуйте ещё раз.');
    setAccessImage(deniedImage);
    setInfoTooltipOpen(true);
  }

  function onAsseccAllowed() {
    setAccesMessage('Вы успешно зарегистрировались!');
    setAccessImage(allowedImage);
    setInfoTooltipOpen(true);
  }

  function savedProfile() {
    setAccesMessage('Профиль сохранен!');
    setAccessImage(allowedImage);
    setInfoTooltipOpen(true);
  }

  function savedFilm() {
    setAccesMessage('Фильм сохранен!');
    setAccessImage(allowedImage);
    setInfoTooltipOpen(true);
  }


  function filterMovies(searchMovies, movies) {
    if (shortFilmsActive) {
      return movies.filter((i) => i.nameRU.toLowerCase().includes(searchMovies.toLowerCase()));
    } else {
      return movies.filter((i) => i.nameRU.toLowerCase().includes(searchMovies.toLowerCase())).filter((i) => i.duration > 52);
    }
  }

  function handleChangeShortFilmActivetily() {
    setShortFilmsActive(!shortFilmsActive);
  }

  function handleFilmSearch(value) {
    setSearchMoviesValue(value);
  }

  function handleSavedFilmSearch(value) {
    setSearchSavedMoviesValue(value);
  }

  function handleExitToMain() {
    history.push('/main');
  }

  function handleCloseAllPopups() {
    setInfoTooltipOpen(false);
    setOpenNavigation(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <ProtectedRoute
            path='/movies'
            component={Movies}
            movies={movies}
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            logoLoggedIn={logoLoggedIn}
            profileImage={profileImage}
            navigationBtn={navigationBtn}
            shortFilmsActive={shortFilmsActive}
            onFilmSave={handleFilmSave}
            filmSearch={handleFilmSearch}
            exitProfile={handleExitToMain}
            openNavigation={handleOpenNavigation}
            changeShortFilmState={handleChangeShortFilmActivetily}
          />
          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            savedFilms={savedMovies}
            navigationBtn={navigationBtn}
            profileImage={profileImage}
            logoLoggedIn={logoLoggedIn}
            exitProfile={handleExitToMain}
            onFilmDelete={handleFilmDelete}
            savedFilmSearch={handleSavedFilmSearch}
            openNavigation={handleOpenNavigation}
          />
          <ProtectedRoute
            path='/profile'
            loggedIn={loggedIn}
            editProfile={handleUpdateUser}
            component={Profile}
            submitButtonText='Сохранить'
            exitProfile={handleExitProfile}
            openNavigation={handleOpenNavigation}
            navigationBtn={navigationBtn}
            profileImage={profileImage}
            logoLoggedIn={logoLoggedIn}
          />
          <Route path='/signup'>
            <Register onRegister={onRegister} />
          </Route>
          <Route path='/signin'>
            <Login onLoginIn={onLoginIn} />
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