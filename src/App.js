import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import * as actions from "./redux/actions/auth";

import "./App.css";
// testing component. Change it later for real Components
const Comp = (props) => {
  console.log(props);
  return <h1>text</h1>;
};

const App = (props) => {
  const history = useHistory();
  const { accType, isAuth } = props;
  let routes = (
    <>
      <Route path="/login" component={(props) => <Comp {...props} />} />
      <Route path="/signup" component={(props) => <Comp {...props} />} />
    </>
  );

  if (isAuth) {
    routes = (
      <>
        <Route
          path="/dashboard"
          component={(props) => <Comp accType={accType} {...props} />}
        />
        <Route
          path="/account"
          component={(props) => <Comp accType={accType} {...props} />}
        />
        <Route
          exact
          path="/session"
          component={(props) => <Comp accType={accType} {...props} />}
        />
      </>
    );
  }

  // test
  const handleLogin = () => {
    props.login();
    history.push("/dashboard");
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={(props) => <Comp {...props} />} />
        {routes}
        <Route path="/about" component={(props) => <Comp {...props} />} />
        <Redirect to="/" />
      </Switch>
      <h1>app</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
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
