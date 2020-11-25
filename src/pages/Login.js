import React, { useState } from 'react';
// import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

import Layout from '../components/Layout/Layout';
import Input from '../components/Input/Input';

import checkValidity from '../utils/formValidation';
import * as actions from '../redux/actions/auth';

const Login = (props) => {
  const [formElements, setFormElements] = useState({
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Your Email',
        name: 'email',
        id: 'email',
      },
      label: 'Email',
      value: '',
    },
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Passwrod',
        name: 'password',
        id: 'password',
      },
      label: 'Password',
      value: '',
    },
  });
  // const history = useHistory();

  // Submit:
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {};
    for (let key in formElements) {
      formData[key] = formElements[key].value;
    }

    const errors = checkValidity(formData, 'login');

    if (Object.keys(errors).length !== 0) {
      return props.handleError('Invalid email or password. Please try again.');
    }
    props.handleError('');
    props.login(formData);
  };

  // Handle change value
  const updateState = (identifier, targetToUpdate, value) => {
    setFormElements((prevState) => ({
      ...prevState,
      [identifier]: {
        ...prevState[identifier],
        [targetToUpdate]: value,
      },
    }));
  };

  const changedHandler = (e) => {
    updateState(e.target.name, 'value', e.target.value);
  };

  // Map over object to create array
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
        {props.errorMessage && <span>{props.errorMessage}</span>}
        <form onSubmit={submitHandler}>
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
        <button onClick={props.login}>Login test</button>
      </Layout>
    </div>
  );
};
const mapStateToProps = (state) => ({
  errorMessage: state.authReducer.error,
});
const mapDispatchToProps = (dispatch) => ({
  login: (loginCredentials) => dispatch(actions.login(loginCredentials)),
  handleError: (message) => dispatch(actions.handleError(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
