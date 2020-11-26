import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ExerciseList.module.css';

const ExcerciseList = (props) => {
  const { exercises } = props;

  const renderExercises = () => {
    if (!exercises || exercises.length < 1) {
      return 'No exercises';
    }
    return exercises.map((exercise) => (
      <div key={exercise.id} className={styles.exercise}>
        <div>
          <b>{exercise.title}</b>
          {exercise.description && <p>{exercise.description}</p>}
        </div>
        <Link to={`/exercise/${exercise.id}`}>
          <button type="button">Details</button>
        </Link>
      </div>
    ));
  };

  return (
    <div>
      <h3>Exercises:</h3>
      <div className={styles.exerciseList}>{renderExercises()}</div>
    </div>
  );
};

export default ExcerciseList;
