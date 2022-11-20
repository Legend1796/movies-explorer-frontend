import React from 'react';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
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
import {
  SHORTMOVIESDURATION,
  FULLSIZE,
  TABLETSIZE,
  MOBILESIZE,
  COUNTMOVIESINFULLSIZE,
  COUNTMOVIESINTABLESIZE,
  COUNTMOVIESINMOBILESIZE,
  COUNTADDMOVIESINFULLSIZE,
  COUNTADDMOVIESINTABLESIZE,
  COUNTADDMOVIESINMOBILESIZE
} from '../../utils/consts'

function App() {
  const [currentUser, setCurrentUser] = React.useState({ name: '', email: '' });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [openNavigation, setOpenNavigation] = React.useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [shortFilmsActive, setShortFilmsActive] = React.useState(JSON.parse(localStorage.getItem('shortMoviesActive')) || false);
  const [shortSavedFilmsActive, setShortSavedFilmsActive] = React.useState(false);
  const [isNeedMoreButton, setNeedMoreButton] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [accesMessage, setAccesMessage] = React.useState('');
  const [accessImage, setAccessImage] = React.useState('');
  const [foundNothingText, setFoundNothingText] = React.useState('');
  const [searchMoviesValue, setSearchMoviesValue] = React.useState('');
  const [searchSavedMoviesValue, setSearchSavedMoviesValue] = React.useState('');
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [countMovies, setCountMovies] = React.useState(6);
  const [countSavedMovies, setCountSavedMovies] = React.useState(6);
  const [addCountMovies, setAddCountMovies] = React.useState(3);
  const [pageWidth, setPagewidth] = React.useState(document.documentElement.scrollWidth);
  const history = useHistory();
  const location = useLocation();
  const isOpen = isInfoTooltipOpen || openNavigation;
  const localStorageAllMovies = JSON.parse(localStorage.getItem('allMovies'));
  const localStorageAllSavedMovies = JSON.parse(localStorage.getItem('allSavedMovies'));
  const localStorageSearchMoviesValue = localStorage.getItem('searchMoviesValue');

  window.onresize = newPageSize;

  React.useEffect(() => {
    if (loggedIn === true) {
      setIsLoading(true);
      Promise.all([
        mainApi.getUserInfo(),
        mainApi.getSavedMovies(),
        moviesApi.getMovies()])
        .then(([info, savedMovies, movies]) => {
          setCurrentUser(info);
          setSavedMovies(savedMovies);
          localStorage.setItem('allSavedMovies', JSON.stringify(savedMovies));
          localStorage.setItem('allMovies', JSON.stringify(movies));
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))
    }
  }, [loggedIn]);

  React.useEffect(() => {
    mainApi.getUserInfo()
      .then((info) => {
        setLoggedIn(true);
        if (localStorageSearchMoviesValue) {
          setSearchMoviesValue(localStorageSearchMoviesValue);
        }
        history.replace(location.pathname);
      })
      .catch((err) => {
        setLoggedIn(false);
        setCurrentUser({});
        setMovies([]);
        setSearchMoviesValue('');
        setShortFilmsActive(false);
        localStorage.clear();
        history.push('/signin');
        console.log(err);
      })
  }, [])

  React.useEffect(() => {
    if (searchMoviesValue !== '') {
      const resultSearch = filterMovies(searchMoviesValue, localStorageAllMovies);
      localStorage.setItem('shortMoviesActive', JSON.stringify(shortFilmsActive));
      localStorage.setItem('searchMoviesValue', searchMoviesValue);
      localStorage.setItem('resultSearchMovies', JSON.stringify(resultSearch));

      console.log(shortFilmsActive);
      setMovies(resultSearch);
      setPagewidth(document.documentElement.scrollWidth);
      if (resultSearch.length === 0) {
        setFoundNothingText('Ничего не найдено');
      }
      countMoviesOnPage();
    }
  }, [searchMoviesValue, shortFilmsActive, pageWidth]);

  React.useEffect(() => {
    if (loggedIn === true) {
      var resultSearch = [];
      resultSearch = filterSavedMovies(searchSavedMoviesValue, localStorageAllSavedMovies);
      if (resultSearch.length === 0) {
        setFoundNothingText('Ничего не найдено');
      }
      setSavedMovies(resultSearch);
      countMoviesOnPage();
    }
  }, [searchSavedMoviesValue, shortSavedFilmsActive, pageWidth]);

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

  React.useEffect(() => {
    if (searchMoviesValue !== '') {
      if (savedMovies.length > countSavedMovies) {
        setNeedMoreButton(true);
      } else { setNeedMoreButton(false) }
    }
  }, [countSavedMovies, shortSavedFilmsActive, savedMovies])

  React.useEffect(() => {
    if (searchMoviesValue !== '') {
      if (movies.length > countMovies) {
        setNeedMoreButton(true);
      } else { setNeedMoreButton(false) }
    }
  }, [countMovies, shortFilmsActive, movies])

  function handleGetAllSavedMovies() {
    setSavedMovies(JSON.parse(localStorage.getItem('allSavedMovies')));
    setSearchSavedMoviesValue('');
    setShortSavedFilmsActive(false);
  }

  function onRegister({ name, email, password }) {
    auth.register(name, email, password)
      .then((res) => {
        onLoginIn({ email: email, password: password });
      })
      .catch(() => onError())
  }

  function onLoginIn({ email, password }) {
    setIsLoading(true);
    auth.autorise(email, password)
      .then((res) => {
        onAsseccAllowed('Вы успешно авторизовались!');
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
        setMovies([]);
        setSearchMoviesValue('');
        setShortFilmsActive(false);
        setLoggedIn(false);
      })
      .catch((err) => onError())
      .finally(() => setIsLoading(false))
  }

  function handleFilmSave(filmInfo) {
    setIsLoading(true);
    mainApi.saveMovie(filmInfo)
      .then((res) => {
        savedMovies.push(res);
        localStorage.setItem('allSavedMovies', JSON.stringify(savedMovies));
      })
      .catch((err) => {
        onError();
        handleExitProfile();
      })
      .finally(() => setIsLoading(false))
  }

  function handleFilmDelete(filmInfo) {
    setIsLoading(true);
    mainApi.deleteMovie(filmInfo._id)
      .then((res) => {
        const newArraySavedMovies = savedMovies.filter((i) => i.movieId !== filmInfo.movieId);;
        setSavedMovies(newArraySavedMovies);
        localStorage.setItem('allSavedMovies', JSON.stringify(newArraySavedMovies));
      })
      .catch((err) => onError())
      .finally(() => setIsLoading(false))
  }

  function handleAddMoreMovies() {
    countMoviesOnPage();
    setCountMovies(countMovies + addCountMovies);
  }

  function handleAddMoreSavedMovies() {
    console.log(addCountMovies);
    countMoviesOnPage();
    setCountSavedMovies(countSavedMovies + addCountMovies);
  }

  function countMoviesOnPage() {
    if (pageWidth >= FULLSIZE) {
      setCountMovies(COUNTMOVIESINFULLSIZE);
      setCountSavedMovies(COUNTMOVIESINFULLSIZE);
      setAddCountMovies(COUNTADDMOVIESINFULLSIZE);
      return;
    } else if (TABLETSIZE <= pageWidth < FULLSIZE) {
      setCountMovies(COUNTMOVIESINTABLESIZE);
      setCountSavedMovies(COUNTMOVIESINTABLESIZE);
      setAddCountMovies(COUNTADDMOVIESINTABLESIZE);
      return;
    } else if (pageWidth < MOBILESIZE) {
      setCountMovies(COUNTMOVIESINMOBILESIZE);
      setCountSavedMovies(COUNTMOVIESINMOBILESIZE);
      setAddCountMovies(COUNTADDMOVIESINMOBILESIZE);
      return;
    }
  }

  function handleOpenNavigation() {
    setOpenNavigation(true);
  }

  function onError() {
    setAccesMessage('Что-то пошло не так!\nПопробуйте ещё раз.');
    setAccessImage(deniedImage);
    setInfoTooltipOpen(true);
  }

  function onAsseccAllowed(message) {
    setAccesMessage(message);
    setAccessImage(allowedImage);
    setInfoTooltipOpen(true);
  }

  function savedProfile() {
    setAccesMessage('Профиль сохранен!');
    setAccessImage(allowedImage);
    setInfoTooltipOpen(true);
  }

  function filterMovies(searchMovies, movies) {
    if (shortFilmsActive === false) {
      return movies.filter((i) => i.nameRU.toLowerCase().includes(searchMovies.toLowerCase()));
    } else {
      return movies.filter((i) => i.nameRU.toLowerCase().includes(searchMovies.toLowerCase())).filter((i) => i.duration <= SHORTMOVIESDURATION);
    }
  }

  function filterSavedMovies(searchMovies, movies) {
    if (searchMovies !== '') {
      if (!shortSavedFilmsActive) {
        return movies.filter((i) => i.nameRU.toLowerCase().includes(searchMovies.toLowerCase()));
      } else {
        return movies.filter((i) => i.nameRU.toLowerCase().includes(searchMovies.toLowerCase())).filter((i) => i.duration <= SHORTMOVIESDURATION);
      }
    } else {
      if (!shortSavedFilmsActive) {
        return movies;
      } else {
        return movies.filter((i) => i.duration < SHORTMOVIESDURATION);
      }
    }
  }

  function handleChangeShortFilmActivetily() {
    setShortFilmsActive(!shortFilmsActive);
  }

  function handleChangeShortSavedFilmActivetily() {
    setShortSavedFilmsActive(!shortSavedFilmsActive);
  }

  function handleFilmSearch(value) {
    if (value !== '') {
      setSearchMoviesValue(value);
    } else {
      setAccesMessage('Введите название фильма!');
      setAccessImage(deniedImage);
      setInfoTooltipOpen(true);
    }
  }

  function handleSavedFilmSearch(value) {
    if (value !== '') {
      setSearchSavedMoviesValue(value);
    } else {
      setAccesMessage('Введите название фильма!');
      setAccessImage(deniedImage);
      setInfoTooltipOpen(true);
    }
  }

  function handleExitToMain() {
    history.push('/main');
  }

  function handleCloseAllPopups() {
    setInfoTooltipOpen(false);
    setOpenNavigation(false);
  }

  function newPageSize() {
    setTimeout(() => {
      setPagewidth(document.documentElement.scrollWidth)
    }, 1000)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <ProtectedRoute
            path='/movies'
            component={Movies}
            movies={
              movies.length === 0
                ? movies
                : movies.slice(0, countMovies)
            }
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            logoLoggedIn={logoLoggedIn}
            profileImage={profileImage}
            navigationBtn={navigationBtn}
            shortFilmsActive={shortFilmsActive}
            isNeedMoreButton={isNeedMoreButton}
            foundNothing={foundNothingText}
            searchMoviesValue={searchMoviesValue}
            onFilmSave={handleFilmSave}
            filmSearch={handleFilmSearch}
            exitProfile={handleExitToMain}
            addMoreMovies={handleAddMoreMovies}
            openNavigation={handleOpenNavigation}
            changeShortFilmState={handleChangeShortFilmActivetily}
          />
          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            savedFilms={savedMovies.slice(0, countSavedMovies)}
            navigationBtn={navigationBtn}
            profileImage={profileImage}
            logoLoggedIn={logoLoggedIn}
            foundNothing={foundNothingText}
            shortSavedFilmsActive={shortSavedFilmsActive}
            isNeedMoreButton={isNeedMoreButton}
            exitProfile={handleExitToMain}
            onFilmDelete={handleFilmDelete}
            openNavigation={handleOpenNavigation}
            savedFilmSearch={handleSavedFilmSearch}
            addMoreMovies={handleAddMoreSavedMovies}
            getAllSavedMovies={handleGetAllSavedMovies}
            changeShortFilmState={handleChangeShortSavedFilmActivetily}
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