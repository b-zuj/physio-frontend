import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import * as actions from "./redux/actions/auth";
import {
  Home,
  Login,
  Signup,
  Dashboard,
  Session,
  Account,
  About,
} from "./pages";

const App = (props) => {
  const { accType, isAuth } = props;
  let routes = (
    <>
      <Route path="/login" component={(props) => <Login {...props} />} />
      <Route path="/signup" component={(props) => <Signup {...props} />} />
    </>
  );

  if (isAuth) {
    routes = (
      <>
        <Route
          path="/dashboard"
          component={(props) => <Dashboard accType={accType} {...props} />}
        />
        <Route
          path="/account"
          component={(props) => <Account accType={accType} {...props} />}
        />
        <Route
          exact
          path="/session"
          component={(props) => <Session accType={accType} {...props} />}
        />
      </>
    );
  }

  // test
  const handleLogin = () => {
    props.login();
    history.push('/dashboard');
  };

  return (
    <>
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
        <Route path="/about" component={(props) => <About {...props} />} />
        {routes}
        <Redirect to="/" />
      </Switch>
    </>
  );
};

const mapStateToPros = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    accType: state.authReducer.accType,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(actions.login()),
  logout: () => dispatch(actions.logout()),
});
export default connect(mapStateToPros, mapDispatchToProps)(App);
