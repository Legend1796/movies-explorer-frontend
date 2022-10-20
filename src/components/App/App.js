import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import '../App/App.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { initialFilms } from '../../utils/initialFilms';
import { savedMovies } from '../../utils/savedMovies';

function App() {
  const [userName, setUserName] = React.useState('Legend');
  const [currentUser, setUserInfo] = React.useState({ name: '', email: '' });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const history = useHistory();

  function handleExitProfile() {
    setLoggedIn(false);
    history.push('/main');
    console.log(loggedIn);
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
    console.log(loggedIn);
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
          <ProtectedRoute path='/movies' loggedIn={loggedIn} component={Movies} initialFilms={initialFilms} />
          <ProtectedRoute path='/saved-movies' loggedIn={loggedIn} component={SavedMovies} savedFilms={savedMovies} />
          <Route path='/signup'>
            <Register onRegister={onRegister} />
          </Route>
          <Route path='/signin'>
            <Login onLoginIn={onLoginIn} />
          </Route>
          <Route path='/profile'>
            <Profile loggedIn={loggedIn} userName={userName} submitButtonText='Сохранить' exitProfile={handleExitProfile} />
          </Route>
          <Route path="/main">
            <Header loggedIn={loggedIn} />
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
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;