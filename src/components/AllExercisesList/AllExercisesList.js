import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Edit, AddBox } from '@material-ui/icons';

import * as actions from '../../redux/actions/exercises';
import classes from './AllExercisesList.module.css';
import Button from '../Button/Button';

const AllExercisesList = (props) => {
  const { fetchAllExercises, exercises } = props;

  useEffect(() => {
    if (exercises.length < 1) {
      fetchAllExercises();
    }
  }, []);

  console.table(exercises);

  const exercise = exercises.map((e) => (
    <div className={classes.exercise} key={e._id}>
      <p className={classes.title}>{e.title}</p>
      <div className={classes.actions}>
        <Button actionStyle="edit">
          <Edit color="inherit" />
        </Button>
        <Button actionStyle="add">
          <AddBox />
        </Button>
      </div>
    </div>
  ));

  return <>{exercise}</>;
};

const mapStateToProps = (state) => ({
  exercises: state.exercisesReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllExercises: () => dispatch(actions.getAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllExercisesList);

// create a exercises Store ALL EXERCISES
// list on this page
// onClick run action ADD_TO_SESSION
