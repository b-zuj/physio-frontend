import React, { useState } from 'react';
import { connect } from 'react-redux';

import Layout from '../components/Layout/Layout';
import Input from '../components/Input/Input';
import checkValidity from '../utils/formValidation';

import * as errorsActions from '../redux/actions/errors';

const Account = (props) => {
  const [formElements, setFormElements] = useState({
    name: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your name',
        name: 'name',
        id: 'name',
      },
      label: 'Name ',
      value: props.user.name,
    },
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Your email',
        name: 'email',
        id: 'email',
      },
      label: 'Email ',
      value: props.user.email,
    },
  });

  // Submit:
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {};
    for (let key in formElements) {
      formData[key] = formElements[key].value;
    }

    const errors = checkValidity(formData, 'account');

    if (Object.keys(errors).length !== 0) {
      return props.handleError('Invalid email or ... something.');
    }

    props.handleError('');
    // props.login(formData);
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
        <h1>Account</h1>
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
          <input type="submit" value="Update account" />
        </form>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => ({
  errorMessage: state.authReducer.error,
  user: state.authReducer.user,
});
const mapDispatchToProps = (dispatch) => ({
  // login: (loginCredentials) => dispatch(authActions.login(loginCredentials)),
  handleError: (message) => dispatch(errorsActions.handleError(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
