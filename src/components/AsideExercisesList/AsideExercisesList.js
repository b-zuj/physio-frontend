import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/exercises';
import classes from './AsideExercisesList.module.css';
import ListedExercise from '../ListedExercise/ListedExercise';

const AsideExercisesList = (props) => {
  const { fetchAllExercises, exercises } = props;

  useEffect(() => {
    if (exercises.length < 1) {
      fetchAllExercises();
    }
  }, []);

  const exercisesList = exercises.map((e) => (
    <ListedExercise key={e._id} exercise={e} flag="add" />
  ));

  return (
    <>
      <p className={classes.header}>Your Exercises</p>
      {exercisesList}
    </>
  );
};

const mapStateToProps = (state) => ({
  exercises: state.exercisesReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllExercises: () => dispatch(actions.getAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AsideExercisesList);
