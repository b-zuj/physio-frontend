import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  changedHandler,
  createFormData,
  findById,
  editModeInitValues,
} from '../utils';

import Layout from '../components/Layout/Layout';
import Form from '../components/Form/Form';
import Button from '../components/Button/Button';

import { useQuery } from '../hooks/useQuery';
import * as errorsActions from '../redux/actions/errors';
import * as exercisesActions from '../redux/actions/exercises';

import classes from './styles/CreateExercise.module.css';

const CreateExercise = (props) => {
  const history = useHistory();
  const query = useQuery();
  const exerciseId = query.get('exerciseId');
  const editMode = query.get('edit');

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
    media: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Video Url',
        name: 'media',
        id: 'media',
      },
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

  let exercise;
  useEffect(() => {
    // EDIT MODE - get exercise and update form
    if (editMode) {
      // eslint-disable-next-line
      if (props.exercises.length === 0) {
        return history.goBack();
      }
      exercise = findById(props.exercises, exerciseId);
      const initialValues = {
        title: exercise.title,
        description: exercise.description,
        media: exercise.media,
      };
      editModeInitValues(formElements, initialValues, setFormElements);
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      const formData = createFormData(formElements, null, 'exercise');

      props.cleanFormError();
      if (editMode) {
        props.updateExercise(formData, exerciseId);
        return history.goBack();
      }
      props.saveExercise(formData);
      history.goBack();
    } catch (error) {
      props.addFormError(error);
    }
  };
  return (
    <Layout>
      <h3>{editMode ? `You're Editing ${exercise}` : 'Create new Exercise'}</h3>
      <Form
        submitHandler={submitHandler}
        changedHandler={(e) => changedHandler(e, 'value', setFormElements)}
        formElements={formElements}
      />
      <div className={classes.actionsContainer}>
        <Button actionStyle="cancel" action={() => history.goBack()}>
          Cancel
        </Button>
        <Button action={submitHandler} actionStyle="create">
          Save
        </Button>
      </div>
    </Layout>
  );
};
const mapStateToProps = (state) => ({
  formError: state.errorReducer.formErrors,
  exercises: state.exercisesReducer,
});
const mapDispatchToProps = (dispatch) => ({
  addFormError: (message) => dispatch(errorsActions.addFormError(message)),
  cleanFormError: () => dispatch(errorsActions.cleanFormError()),
  saveExercise: (exerciseData) =>
    dispatch(exercisesActions.saveExercise(exerciseData)),
  updateExercise: (exerciseData, exerciseId) =>
    dispatch(exercisesActions.updateExercise(exerciseData, exerciseId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateExercise);
