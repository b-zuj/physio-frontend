import React, { useState } from 'react';
import { connect } from 'react-redux';

import Layout from '../components/Layout/Layout';
import Input from '../components/Input/Input';
import checkValidity from '../utils/formValidation';
import Button from '../components/Button/Button';

import * as errorsActions from '../redux/actions/errors';
import * as accountActions from '../redux/actions/account';

const Account = (props) => {
  const {
    updateAccount,
    user,
    addFormError,
    cleanFormError,
    errorMessage,
  } = props;
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
      value: user.name,
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
      value: user.email,
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
      return addFormError(errors);
    }

    const accountData = JSON.parse(JSON.stringify(user));
    accountData.name = formData.name;
    accountData.email = formData.email;
    updateAccount(accountData);

    cleanFormError();
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
        {errorMessage && <span>{errorMessage}</span>}
        <form>
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
            Update account
          </Button>
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
  addFormError: (message) => dispatch(errorsActions.addFormError(message)),
  cleanFormError: () => dispatch(errorsActions.cleanFormError()),
  updateAccount: (accountData) =>
    dispatch(accountActions.updateAccount(accountData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
