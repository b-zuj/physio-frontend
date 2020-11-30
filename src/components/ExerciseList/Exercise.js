import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Video from '../Video/Video'


import Button from '../Button/Button';
import classes from './ExerciseList.module.css';

const Exercise = ({ exerciseData, exerciseMode, userType }) => {
  const { exercise, comment } = exerciseData;

  const exerciseDetails = (
    <div>
      <b>{exercise.title}</b>
      {exercise.media && <div className={classes.videoContainer}>
        <Video id={exercise.media} />
      </div>}
      {exercise.description && (
        // <p>{exercise.description}</p>
        <details>
          <summary className={classes.exerciseDescription}>{exercise.description}</summary>
          {exercise.description}
        </details>
      )}
      <p>
        <i>{comment}</i>
      </p>
    </div>
  )

  const exerciseSummary = (
    <div>
      <b>{exercise.title}</b>
      {exercise.description && (
        <p className={classes.exerciseDescription}>{exercise.description}</p>
      )}
      <p>
        <i>{comment}</i>
      </p>
    </div>
  )

  return (
    <div className={classes.exercise}>
      {exerciseMode ? exerciseDetails : exerciseSummary}
      {userType === 'pro' && <Link to={`/exercise/create?edit=true&exerciseId=${exercise._id}`}>
        <Button actionStyle="edit">Edit</Button>
      </Link>}
      {!exerciseMode && <Link to={`/exercise/${exercise._id}`}>
        <Button actionStyle="link">Details</Button>
      </Link>}

    </div>
  );
};

const mapStateToProps = (state) => ({
  userType: state.authReducer.user.userType,
});

export default connect(mapStateToProps)(Exercise);
