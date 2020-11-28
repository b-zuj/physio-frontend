import React, { useState } from 'react';
import { connect } from 'react-redux';

import Layout from '../components/Layout/Layout';
import Input from '../components/Input/Input';
import checkValidity from '../utils/formValidation';
import * as errorsActions from '../redux/actions/errors';
import * as invitationActions from '../redux/actions/invitation';

const Invite = (props) => {
  const [formElements, setFormElements] = useState({
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Email',
        name: 'email',
        id: 'email',
      },
      label: '',
      value: '',
    },
  });
  const [feedback, setFeedback] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {};
    for (let key in formElements) {
      formData[key] = formElements[key].value;
    }

    const errors = checkValidity(formData, 'invite');
    if (Object.keys(errors).length !== 0) {
      return props.handleError('Invalid email. Please try again.');
    }
    props.handleError('');
    props.createInvitation(formData);
    setFeedback(`Invitation sendt to ${formData.email} .`);
  };

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
        <h1>Invite</h1>
        <p>Invite a new client to join physio:</p>
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
          <input type="submit" value="Send invitation" />
          {<p>{feedback}</p>}
        </form>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => ({
  errorMessage: state.authReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  handleError: (message) => dispatch(errorsActions.handleError(message)),
  createInvitation: (data) =>
    dispatch(invitationActions.createInvitation(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Invite);
