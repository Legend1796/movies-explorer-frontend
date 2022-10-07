import React from 'react';
import '.';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Main from '../Main/Main';

import Login from './Login';
import Register from './Register';
import ProtectedRoute from '../ProtectedRoute';



function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);


  return (

    <div className="page">
      <Header />
      <Switch>
        <Route path="/main">
          <Main />
        </Route>
        <ProtectedRoute path="/movies" loggedIn={loggedIn} />
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route exact path="/">
          {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signin" />}
        </Route>
      </Switch>
      <Footer />
    </div>

  );
}

export default App;