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
import * as auth from '../../utils/auth';
import mainApi from '../../utils/MainApi';


function App() {
  const [userName, setUserName] = React.useState('Legend');
  const [currentUser, setUserInfo] = React.useState({ name: '', email: '' });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [openNavigation, setOpenNavigation] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
    if (loggedIn === true) {
      Promise.all([
        mainApi.getUserInfo()])
        // api.getInitialCards()])
        .then(([info, cards]) => {
          setUserInfo(info);
          console.log(currentUser)
          // setCards(cards);
        })
        .catch((err) => console.log(err));
    };
  }, [loggedIn]);

  function handleExitProfile() {
    setLoggedIn(false);
    history.push('/main');
  }

  function handleOpenNavigation() {
    setOpenNavigation(true);
  }

  function handleCloseNavigation() {
    setOpenNavigation(false);
  }

  function onAsseccDenied() {
    // setAccesMessage('Что-то пошло не так!\nПопробуйте ещё раз.');
    // setAccessImage(deniedImage);
    // setInfoTooltipOpen(true);
    console.log('Доделать попап неудачного входа в аккаунт');
  }

  function onAsseccAllowed() {
    // setAccesMessage('Вы успешно зарегистрировались!');
    // setAccessImage(allowedImage);
    // setInfoTooltipOpen(true);
    console.log('Доделать попап удачного входа в аккаунт');
  }
  function onRegister({ name, email, password }) {
    auth.register(name, email, password)
      .then((res) => {
        console.log(name, email, password);
        onAsseccAllowed();
        history.push('/movies');
        setLoggedIn(true);
      })
      .catch(() => onAsseccDenied());
  }

  function onLoginIn({ email, password }) {
    auth.autorise(email, password)
      .then((res) => {
        console.log(res);
        // history.push("/movies");
        // setLoggedIn(true);
        mainApi.getUserInfo()
          .then((info) => {
            setUserInfo(info);
            console.log(currentUser)
          })
          .catch((err) => console.log(err));
      })
      .catch(() => onAsseccDenied());
  }

  function handleUpdateUser(userData) {
    // setIsLoading(true);
    mainApi.setUserInfo(userData)
      .then((res) => {
        setUserInfo(res);
        // handleCloseAllPopups();
      })
      .catch((err) => console.log(err))
    // .finally(() => setIsLoading(false))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <ProtectedRoute path='/movies' loggedIn={loggedIn} exitProfile={handleExitProfile} component={Movies} initialFilms={initialFilms} openNavigation={handleOpenNavigation} navigationBtn={navigationBtn} profileImage={profileImage} logoLoggedIn={logoLoggedIn} />
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
            <Header loggedIn={loggedIn} exitProfile={handleExitProfile} openNavigation={handleOpenNavigation} navigationBtn={navigationBtn} profileImage={profileImage} logoLoggedIn={logoLoggedIn} />
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
        <Navigation profileImage={profileImage} exitProfile={handleExitProfile} closeNavigationBtn={closeNavigationBtn} onClose={handleCloseNavigation} isOpen={openNavigation} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;