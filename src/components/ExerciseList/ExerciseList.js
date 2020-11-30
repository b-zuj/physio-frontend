import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ExerciseList.module.css';
import Button from '../Button/Button';
import classes from './ExerciseList.module.css';
import Exercise from './Exercise';

const ExcerciseList = (props) => {
  const { exercises } = props;
  console.log(exercises);
  const renderExercises = () => {
    if (!exercises || exercises.length < 1) {
      return 'No exercises';
    }
    console.log(exercises);
    return exercises.map((e) => (
      <Exercise key={e.exercise._id} exerciseData={e} />
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
