import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "../components/Layout/Layout";
import Input from "../components/Input/Input";

import checkValidity from "../utils/validity";
import * as actions from "../redux/actions/auth";

const Login = (props) => {
  const [formElements, setFormElements] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Your Email",
        name: "email",
        id: "email",
      },
      label: "Email",
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      error: "",
      touched: false,
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Passwrod",
        name: "password",
        id: "password",
      },
      label: "Password",
      value: "",
      validation: {
        required: true,
        isLength: {
          min: 6,
        },
      },
      error: "",
      touched: false,
    },
  });

  const history = useHistory();

  const loginHandler = () => {
    // validate

    props.login();
    history.push("/dashboard");
  };

  const changedHandler = (e) => {
    setFormElements((prevState) => ({
      ...prevState,
      [e.target.name]: {
        ...prevState[e.target.name],
        value: e.target.value,
      },
    }));
  };

  const formElementsArray = [];

  for (let key in formElements) {
    formElementsArray.push({
      id: key,
      config: formElements[key],
    });
  }

  return (
    <div>
      <Layout>
        <h1>Login</h1>
        <form onSubmit={loginHandler}>
          {formElementsArray.map((el) => (
            <Input
              key={el.id}
              elementType={el.config.elementType}
              elementConfig={el.config.elementConfig}
              value={el.config.value}
              changed={changedHandler}
              label={el.config.label}
              invalid={el.config.error}
            />
          ))}
          <input type="submit" value="Login" />
        </form>
      </Layout>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(actions.login()),
  logout: () => dispatch(actions.logout()),
});

export default connect(null, mapDispatchToProps)(Login);
