import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import classes from './ExerciseList.module.css';

const Exercise = ({ exerciseData }) => {
  const { exercise, comment } = exerciseData;

  return (
    <div className={classes.exercise}>
      <div>
        <b>{exercise.title}</b>
        {exercise.description && (
          <p className={classes.exerciseDescription}>{exercise.description}</p>
        )}
        <p>
          <i>{comment}</i>
        </p>
      </div>
      <Link to={`/exercise/create?edit=true&exerciseId=${exercise._id}`}>
        <Button actionStyle="edit">Edit</Button>
      </Link>
      <Link to={`/exercise/${exercise._id}`}>
        <Button actionStyle="link">Details</Button>
      </Link>
    </div>
  );
};

export default Exercise;
