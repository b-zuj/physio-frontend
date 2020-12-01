import React from 'react';
import styles from './ExerciseList.module.css';
import Exercise from './Exercise';

const ExcerciseList = props => {
  const { exercises } = props;
  const renderExercises = () => {
    if (!exercises || exercises.length < 1) {
      return 'No exercises';
    }
    return exercises.map(e => (
      <Exercise
        key={e.exercise._id}
        exerciseData={e}
        exerciseMode={props.exerciseMode ? true : false}
      />
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
