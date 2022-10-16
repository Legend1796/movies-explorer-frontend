import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../App/App.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import ProtectedRoute from '../ProtectedRoute';

function App() {
  const [userName, setUserName] = React.useState('Legend');
  const [currentUser, setUserInfo] = React.useState({ name: '', email: '' });
  // const [loggedIn, setLoggedIn] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/profile">
            <Header loggedIn={loggedIn} />
            <Profile userName={userName} />
          </Route>
          <Route exact path="/">
            {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/main" />}
          </Route>
          <Route path="/main">
            <Header loggedIn={loggedIn} />
            <Main />
            <Footer />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;