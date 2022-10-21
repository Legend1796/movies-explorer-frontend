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
import logoLoggedOut from '../../images/logo-unlogged.svg';
import logoLoggedIn from '../../images/header-logo.svg';
import profileImage from '../../images/profile.svg';
import navigationBtn from '../../images/navigation-btn.svg';
import closeNavigationBtn from '../../images/closePopupBtn.svg';

function App() {
  const [userName, setUserName] = React.useState('Legend');
  const [currentUser, setUserInfo] = React.useState({ name: '', email: '' });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [openNavigation, setOpenNavigation] = React.useState(false);
  const history = useHistory();

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

  function onRegister({ name, email, password }) {
    // auth.register(email, password)
    //   .then((res) => {
    //     setUserEmail(res.email);
    //     setLoggedIn(true);
    //     onAsseccAllowed();
    //     history.push('/main');
    //   })
    //   .catch(() => onAsseccDenied());
    history.push('/movies');
    setLoggedIn(true);
  }

  function onLoginIn({ email, password }) {
    // auth.autorise(email, password)
    //   .then((res) => {
    //     setUserEmail(res.email);
    //     setLoggedIn(true);
    //     history.push('/main');
    //   })
    //   .catch(() => onAsseccDenied());
    history.push('/movies');
    setLoggedIn(true);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <ProtectedRoute path='/movies' loggedIn={loggedIn} component={Movies} initialFilms={initialFilms} openNavigation={handleOpenNavigation} navigationBtn={navigationBtn} profileImage={profileImage} logoLoggedIn={logoLoggedIn} logoLoggedOut={logoLoggedOut} />
          <ProtectedRoute path='/saved-movies' loggedIn={loggedIn} component={SavedMovies} savedFilms={savedMovies} openNavigation={handleOpenNavigation} navigationBtn={navigationBtn} profileImage={profileImage} logoLoggedIn={logoLoggedIn} logoLoggedOut={logoLoggedOut} />
          <Route path='/signup'>
            <Register onRegister={onRegister} />
          </Route>
          <Route path='/signin'>
            <Login onLoginIn={onLoginIn} />
          </Route>
          <Route path='/profile'>
            <Profile loggedIn={loggedIn} userName={userName} submitButtonText='Сохранить' exitProfile={handleExitProfile} openNavigation={handleOpenNavigation} navigationBtn={navigationBtn} profileImage={profileImage} logoLoggedIn={logoLoggedIn} logoLoggedOut={logoLoggedOut} />
          </Route>
          <Route path="/main">
            <Header loggedIn={loggedIn} openNavigation={handleOpenNavigation} navigationBtn={navigationBtn} profileImage={profileImage} logoLoggedIn={logoLoggedIn} logoLoggedOut={logoLoggedOut} />
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