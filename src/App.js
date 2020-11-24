import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import {
  Home,
  About,
  Login,
  Signup,
  Dashboard,
  Session,
  Account,
} from "./pages";

const App = (props) => {
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
        <Route
          exact
          path="/session"
          component={(props) => <Session {...props} />}
        />
        <Redirect to="/" />
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

export default connect(mapStateToPros)(App);
