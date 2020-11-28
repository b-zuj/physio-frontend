import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './styles/CreateSession.module.css';
import checkValidity from '../utils/formValidation';
import { useQuery } from '../hooks/useQuery';
import Layout from '../components/Layout/Layout';
import Form from '../components/Form/Form';
import AllExercisesList from '../components/AllExercisesList/AllExercisesList';

import * as errorsActions from '../redux/actions/errors';
import * as sessionActions from '../redux/actions/session';

const CreateSession = (props) => {
  const [formElements, setFormElements] = useState({
    title: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Title',
        name: 'title',
        id: 'title',
      },
      label: 'Title',
      value: '',
    },
    description: {
      elementType: 'textarea',
      elementConfig: {
        placeholder: 'Description',
        name: 'description',
        id: 'description',
      },
      value: '',
    },
  });

  const query = useQuery();
  const clientId = query.get('client');

  let client;

  if (clientId) {
    client = props.clients.find((c) => c._id === clientId);
  }

  // Submit:
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {};
    for (let key in formElements) {
      formData[key] = formElements[key].value;
    }
    formData.client = client._id.toString();
    const errors = checkValidity(formData, 'session');

    if (Object.keys(errors).length !== 0) {
      return props.handleError('Invalid email or password. Please try again.');
    }
    props.handleError('');
    props.createSession(formData);
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
    <Layout>
      <h1 className={classes.title}>
        Creating session for <span>{client.name}</span>
      </h1>

      <div className={classes.wrapper}>
        <div className={classes.formContainer}>
          {props.errorMessage && (
            <span className={classes.errorMsg}>{props.errorMessage}</span>
          )}
          <Form
            submitHandler={submitHandler}
            changedHandler={changedHandler}
            formElementsArray={formElementsArray}
          />
        </div>
        <div className={classes.exerciseListContainer}>
          <AllExercisesList />
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  clients: state.authReducer.user.clients,
  errorMessage: state.authReducer.error,
});
const mapDispatchToProps = (dispatch) => ({
  handleError: (message) => dispatch(errorsActions.handleError(message)),
  createSession: (data) => dispatch(sessionActions.createSession(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateSession);
