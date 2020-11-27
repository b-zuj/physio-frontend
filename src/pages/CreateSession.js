import React, { useState } from 'react';
import { connect } from 'react-redux';

import checkValidity from '../utils/formValidation';
import { useQuery } from '../hooks/useQuery';
import Layout from '../components/Layout/Layout';
import Input from '../components/Input/Input';
import EditExerciseList from '../components/EditExerciseList/EditExerciseList';

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
    // client: {
    //   elementType: 'select',
    //   elementConfig: {
    //     name: 'client',
    //     id: 'client',
    //   },
    //   value: '',
    //   options: props.clients.map((c) => c.name),
    // },
  });
  const query = useQuery();
  const sessionId = query.get('sessionId');
  const clientId = query.get('client');
  // console.log({ sessionId, clientId });
  let client;
  if (clientId) {
    client = props.clients.find((c) => c._id === clientId);
  }
  // console.log({ client });
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
    // props.login(formData);
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
      <div>Creating session for {client.name}</div>
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
            options={el.config.options}
          />
        ))}
        <input type="submit" value="Create Session" />
      </form>
      {/* <EditExerciseList exercises={session.exercises} /> */}
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
