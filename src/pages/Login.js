import React, { useState } from 'react';
import { connect } from 'react-redux';

import { changedHandler, createFormData } from '../utils';

import Layout from '../components/Layout/Layout';
import Form from '../components/Form/Form';
import Button from '../components/Button/Button';

import * as authActions from '../redux/actions/auth';
import * as errorsActions from '../redux/actions/errors';

const Login = props => {
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

  // Submit:
  const submitHandler = e => {
    e.preventDefault();
    try {
      const formData = createFormData(formElements, null, 'login');
      props.cleanFormError();
      props.login(formData);
    } catch (error) {
      props.addFormError(error);
    }
  };

  return (
    <div>
      <Layout>
        <h1>Login</h1>
        <Form
          submitHandler={submitHandler}
          changedHandler={e => changedHandler(e, 'value', setFormElements)}
          formElements={formElements}
          submitBtn
        />
        <Button type="submit" action={submitHandler} actionStyle="create">
          Login
        </Button>
      </Layout>
    </div>
  );
};
const mapStateToProps = state => ({
  errorMessage: state.authReducer.error,
});
const mapDispatchToProps = dispatch => ({
  login: loginCredentials => dispatch(authActions.login(loginCredentials)),
  addFormError: message => dispatch(errorsActions.addFormError(message)),
  cleanFormError: () => dispatch(errorsActions.cleanFormError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
