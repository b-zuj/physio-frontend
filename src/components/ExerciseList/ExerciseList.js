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
      <Exercise key={e.exercise._id} exerciseData={e} exerciseMode={props.exerciseMode ? true : false}/>
      // <div key={e.exercise._id} className={styles.exercise}>
      //   <div>
      //     <b>{e.exercise.title}</b>
      //     {e.exercise.description && <p>{e.exercise.description}</p>}
      //     <p>
      //       <i>{e.comment}</i>
      //     </p>
      //     {props.exerciseMode && <p>{e.exercise.media}</p>}
      //   </div>
      //   <Link to={`/exercise/${e.exercise._id}`}>
      //     <Button actionStyle="link">Details</Button>
      //   </Link>
      // </div>
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
