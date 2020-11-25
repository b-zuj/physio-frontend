import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ExerciseList.module.css';

const ExcerciseList = (props) => {
  const { exercises } = props;

  const renderExercises = () => {
    if (!exercises || exercises.length < 1) {
      return 'No exercises';
    }
    return exercises.map((excercise) => (
      <div key={excercise.id} className={styles.excercise}>
        <span>{excercise.title}</span>
        <Link to={`/excercise/${excercise.id}`}>
          <button type="button">Details</button>
        </Link>
      </div>
    ));
  };

  return (
    <div>
      <h3>Exercises:</h3>
      <div className={styles.excerciseList}>{renderExercises()}</div>
    </div>
  );
};

export default ExcerciseList;
