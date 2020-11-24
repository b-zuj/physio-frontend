import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "../components/Layout/Layout";

import * as actions from "../redux/actions/auth";

const Login = (props) => {
  const history = useHistory();
  const loginHandler = () => {
    props.login();
    history.push("/dashboard");
  };
  return (
    <div>
      <Layout>
        <h1>Loginpage</h1>
        <button onClick={loginHandler}>Login</button>
      </Layout>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(actions.login()),
  logout: () => dispatch(actions.logout()),
});

export default connect(null, mapDispatchToProps)(Login);
