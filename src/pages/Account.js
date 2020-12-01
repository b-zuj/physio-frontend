import React, { useState } from 'react';
import { connect } from 'react-redux';

import Layout from '../components/Layout/Layout';
import Input from '../components/Input/Input';
import checkValidity from '../utils/formValidation';
import Button from '../components/Button/Button';
import { changedHandler, createFormData } from '../utils';
import Form from '../components/Form/Form';

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

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      const formData = createFormData(formElements, null, 'account');
      props.cleanFormError();
      // props.login(formData);
      // console.log(formData.name);
      const accountData = JSON.parse(JSON.stringify(user));
      accountData.name = formData.name;
      accountData.email = formData.email;
      updateAccount(accountData);
      // console.log(accountData);
    } catch (error) {
      props.addFormError(error);
    }
  };

  // Submit:
  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   const formData = {};
  //   for (let key in formElements) {
  //     formData[key] = formElements[key].value;
  //   }

  //   const errors = checkValidity(formData, 'account');

  //   if (Object.keys(errors).length !== 0) {
  //     return addFormError(errors);
  //   }

  //   const accountData = JSON.parse(JSON.stringify(user));
  //   accountData.name = formData.name;
  //   accountData.email = formData.email;
  //   updateAccount(accountData);

  //   cleanFormError();
  // };

  // // Handle change value
  // const updateState = (identifier, targetToUpdate, value) => {
  //   setFormElements((prevState) => ({
  //     ...prevState,
  //     [identifier]: {
  //       ...prevState[identifier],
  //       [targetToUpdate]: value,
  //     },
  //   }));
  // };

  // const changedHandler = (e) => {
  //   updateState(e.target.name, 'value', e.target.value);
  // };

  // // Map over object to create array
  // const formElementsArray = [];

  // for (let key in formElements) {
  //   formElementsArray.push({
  //     id: key,
  //     config: formElements[key],
  //   });
  // }

  return (
    <div>
      <Layout>
        <Form
          submitHandler={submitHandler}
          changedHandler={(e) => changedHandler(e, 'value', setFormElements)}
          formElements={formElements}
          heading="Account"
          addedClassName="account"
          btn={'Update account'}
        ></Form>
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
