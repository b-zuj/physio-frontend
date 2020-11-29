import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import classes from './styles/CreateSession.module.css';
import checkValidity from '../utils/formValidation';
import { useQuery } from '../hooks/useQuery';
import Layout from '../components/Layout/Layout';
import Form from '../components/Form/Form';
import AsideExercisesList from '../components/AsideExercisesList/AsideExercisesList';
import AssignedExercises from '../components/AssignedExercises/AssignedExercises';
import Button from '../components/Button/Button';

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
  const history = useHistory();
  const query = useQuery();
  const sessionId = query.get('sessionId');
  const clientId = query.get('client');
  const editMode = query.get('edit');

  let client;

  if (clientId) {
    client = props.clients.find((c) => c._id === clientId);
  }
  useEffect(() => {
    // EDIT MODE
    if (editMode) {
      const session = client.sessions.find((s) => s._id === sessionId);
      props.updateExercises(session.exercises);
      const updatedFormElements = { ...formElements };
      updatedFormElements.title.value = session.title;
      updatedFormElements.description.value = session.description;
      setFormElements(updatedFormElements);
      // console.log(session);
    }
  }, []);

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
    const exercisesData = props.session.exercises.map((e) => ({
      exercise: e.exercise._id,
      comment: e.comment,
    }));
    console.log(exercisesData);
    console.log('PROPS SESSION', props.session);
    const sessionData = {
      exercises: exercisesData,
      ...formData,
    };

    if (editMode) {
      props.updateSession(sessionData, sessionId);
      return history.replace(`/client/${client._id}`);
    }
    props.createSession(sessionData);

    history.replace(`/client/${client._id}`);
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
        {editMode ? 'Editing session for ' : 'Creating session for '}
        <span>{client.name}</span>
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
          <AssignedExercises />
          <div className={classes.actionsContainer}>
            <Button action={() => history.goBack()} actionStyle={'cancel'}>
              Cancel
            </Button>
            <Button type="submit" action={submitHandler} actionStyle="create">
              {editMode ? 'Save Changes' : 'Create Session'}
            </Button>
          </div>
        </div>
        <aside className={classes.allExercisesListContainer}>
          <AsideExercisesList />
        </aside>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  clients: state.authReducer.user.clients,
  errorMessage: state.authReducer.error,
  session: state.sessionReducer,
});
const mapDispatchToProps = (dispatch) => ({
  handleError: (message) => dispatch(errorsActions.handleError(message)),
  createSession: (data) => dispatch(sessionActions.createSession(data)),
  updateSession: (data, sessionId) =>
    dispatch(sessionActions.updateSession(data, sessionId)),
  addDescription: (formData) =>
    dispatch(sessionActions.addDescription(formData)),
  updateExercises: (exercisesList) =>
    dispatch(sessionActions.updateExercises(exercisesList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateSession);
