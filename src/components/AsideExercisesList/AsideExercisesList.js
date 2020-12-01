import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../redux/actions/exercises';
import classes from './AsideExercisesList.module.css';
import ListedExercise from '../ListedExercise/ListedExercise';
import Button from '../Button/Button';

const AsideExercisesList = (props) => {
  const { fetchAllExercises, exercises, dashboard } = props;

  useEffect(() => {
    if (exercises.length < 1) {
      fetchAllExercises();
    }
  }, []);
  const exercisesList = exercises.map((e) => (
    <ListedExercise key={e._id} exercise={e} flag="add" dashboard={dashboard} />
  ));

  return (
    <>
      <div>
        {!dashboard && <p className={classes.header}>Your Exercises</p>}
        <Link to="/exercise/create">
          <Button actionStyle="create">Create New Exercise >>></Button>
        </Link>
      </div>
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
