import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../App/App.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';

// import ProtectedRoute from '../ProtectedRoute';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    // <CurrentUserContext.Provider>
    <>
      <div className="page">
        <Switch>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
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
    </>
    // </CurrentUserContext.Provider>
  );
}

export default App;