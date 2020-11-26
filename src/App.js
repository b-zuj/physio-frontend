import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import {
  Home,
  About,
  Login,
  Signup,
  Dashboard,
  Session,
  Account,
  Client,
} from './pages';

import * as actions from './redux/actions/auth';

const App = (props) => {
  const { tryToAutoLog } = props;
  useEffect(() => {
    tryToAutoLog();
  }, [tryToAutoLog]);

  const { isAuth } = props;
  let routes = (
    <Switch>
      <Route exact path="/" component={(props) => <Home {...props} />} />
      <Route path="/about" component={(props) => <About {...props} />} />
      <Route path="/login" component={(props) => <Login {...props} />} />
      <Route path="/signup" component={(props) => <Signup {...props} />} />
      <Redirect to="/" />
    </Switch>
  );
  if (isAuth) {
    routes = (
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
        <Route path="/about" component={(props) => <About {...props} />} />
        <Route
          path="/dashboard"
          component={(props) => <Dashboard {...props} />}
        />
        <Route path="/account" component={(props) => <Account {...props} />} />
        <Route path="/client/:id" children={(props) => <Client {...props} />} />
        <Route
          path="/session/:id"
          children={(props) => <Session {...props} />}
        />
        <Route path="/client/:id" children={(props) => <Client {...props} />} />
        <Redirect to="/dashboard" />

      </Switch>
    );
  }

  return routes;
};

const mapStateToPros = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    accType: state.authReducer.accType,
  };
};
const mapDispatchToPros = (dispatch) => {
  return {
    tryToAutoLog: () => dispatch(actions.tryToAutoLog()),
  };
};

export default connect(mapStateToPros, mapDispatchToPros)(App);
