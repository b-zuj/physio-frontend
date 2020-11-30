import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Edit, AddBox, Delete } from '@material-ui/icons';

import * as actions from '../../redux/actions/session';

import Button from '../Button/Button';
import classes from './ListedExercise.module.css';

const ListedExercise = (props) => {
  const {
    exercise,
    flag,
    addExercise,
    removeExercise,
    asignedExercises,
  } = props;

  let assignedOrNot;

  const disabled =
    asignedExercises.findIndex((e) => e.exercise._id === exercise._id) > -1
      ? true
      : false;

  if (flag === 'add') {
    assignedOrNot = (
      <>
        <Link
          to={`/exercise/create?edit=true&exerciseId=${
            exercise._id ?? exercise.exercise._id
          }`}
        >
          <Button actionStyle="editSvg">
            <Edit color="inherit" />
          </Button>
        </Link>
        <Button
          action={() => addExercise(exercise)}
          actionStyle="add"
          isDisabled={disabled}
        >
          <AddBox />
        </Button>
      </>
    );
  }

  if (flag === 'remove') {
    assignedOrNot = (
      <Button action={() => removeExercise(exercise)} actionStyle="delete">
        <Delete />
      </Button>
    );
  }

  return (
    <div className={classes.exercise}>
      <p className={classes.title}>
        {exercise.title ? exercise.title : exercise.exercise.title}
      </p>
      <div className={classes.actions}>{assignedOrNot}</div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  asignedExercises: state.sessionReducer.exercises,
});
const mapDispatchToProps = (dispatch) => ({
  addExercise: (exercise) => dispatch(actions.addExercise(exercise)),
  removeExercise: (exercise) => dispatch(actions.removeExercise(exercise)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListedExercise);
