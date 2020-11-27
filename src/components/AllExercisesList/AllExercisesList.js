import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/exercises';

const AllExercisesList = (props) => {
  const { fetchAllExercises, exercises } = props;

  useEffect(() => {
    if (exercises.length < 1) {
      fetchAllExercises();
    }
  }, []);

  console.table(exercises);

  const exercise = exercises.map((e) => (
    <div key={e._id}>
      <p>{e.title}</p>
      <button>EDIT</button>
      <button>ADD</button>
    </div>
  ));

  return <div>{exercise}</div>;
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
