import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { useQuery } from '../hooks/useQuery';
import Layout from '../components/Layout/Layout';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

import checkValidity from '../utils/formValidation';
import * as authActions from '../redux/actions/auth';
import * as errorsActions from '../redux/actions/errors';

const Signup = (props) => {
  const [formElements, setFormElements] = useState({
    name: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your Name',
        name: 'name',
        id: 'name',
      },
      label: 'Full Name',
      value: '',
    },
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
    confirmPassword: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Confirm Passwrod',
        name: 'confirmPassword',
        id: 'confirmPassword',
      },
      label: 'Confirm Password',
      value: '',
    },
  });

  const query = useQuery();

  useEffect(() => {
    if (query.get('user') === 'client' && query.get('token')) {
      const token = query.get('token');
      setFormElements((prevState) => ({
        ...prevState,
        proInput: {
          elementType: 'input',
          elementConfig: {
            type: 'hidden',
            name: 'pro',
            id: 'pro',
          },
          value: token,
        },
      }));
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {};
    for (let key in formElements) {
      formData[formElements[key].elementConfig.name] = formElements[key].value;
    }
    const errors = checkValidity(formData, 'signup');

    if (Object.keys(errors).length !== 0) {
      return props.handleError(
        'Invalid credentials. Please check email or password and try again.'
      );
    }
    props.handleError('');
    delete formData.confirmPassword;
    if (formData.pro) return props.signupClient(formData);
    props.signup(formData);
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
        <h1>Signup Page</h1>
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
          <Button type="submit" action={submitHandler} actionStyle="create">
            Signup
          </Button>
        </form>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => ({
  errorMessage: state.authReducer.error,
});
const mapDispatchToProps = (dispatch) => ({
  signup: (credentials) => dispatch(authActions.signup(credentials)),
  signupClient: (credentials) =>
    dispatch(authActions.signupClient(credentials)),
  handleError: (message) => dispatch(errorsActions.handleError(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
