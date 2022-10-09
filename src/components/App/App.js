import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
// import Login from '../Login';
// import Register from './Register';
// import ProtectedRoute from '../ProtectedRoute';

function App() {

  // const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    // <CurrentUserContext.Provider>
    <>
      <div className="page">
        <Header />
        <Main />
        <Switch>
          {/* <Route path="/">
            <Main />
          </Route> */}
          {/* <ProtectedRoute path="/movies" loggedIn={loggedIn} /> */}
          {/* <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
          </Route> */}
        </Switch>
        <Footer />
      </div>
    </>
    // </CurrentUserContext.Provider>
  );
}

export default App;