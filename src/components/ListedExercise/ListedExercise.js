import React from 'react';
import { connect } from 'react-redux';

import { Edit, AddBox, Delete } from '@material-ui/icons';

import * as actions from '../../redux/actions/session';

import Button from '../Button/Button';
import classes from './ListedExercise.module.css';

const ListedExercise = (props) => {
  const { exercise, flag, addExercise, removeExercise, editHandler } = props;
  let addOrDeleteBtn;

  if (flag === 'add') {
    addOrDeleteBtn = (
      <Button action={() => addExercise(exercise)} actionStyle="add">
        <AddBox />
      </Button>
    );
  }

  if (flag === 'remove') {
    addOrDeleteBtn = (
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
      <div className={classes.actions}>
        <Button actionStyle="edit">
          <Edit color="inherit" />
        </Button>
        {addOrDeleteBtn}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addExercise: (exercise) => dispatch(actions.addExercise(exercise)),
  removeExercise: (exercise) => dispatch(actions.removeExercise(exercise)),
});

export default connect(null, mapDispatchToProps)(ListedExercise);
