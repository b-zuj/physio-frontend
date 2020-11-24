import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "../components/Layout/Layout";
import Form from "../components/Form/Form";

import * as actions from "../redux/actions/auth";

const Login = (props) => {
  const formElements = {
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Your Email",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
  };

  const history = useHistory();

  const loginHandler = () => {
    props.login();
    history.push("/dashboard");
  };

  return (
    <div>
      <Layout>
        <h1>Loginpage</h1>
        <Form formElements={formElements} onSubmitHandler={loginHandler} />
      </Layout>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(actions.login()),
  logout: () => dispatch(actions.logout()),
});

export default connect(null, mapDispatchToProps)(Login);
