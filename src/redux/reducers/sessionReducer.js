const InitialState = {
  title: '',
  description: '',
  client: '',
  exercises: [],
};

const sessionReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'ADD_EXERCISE':
      return {
        ...state,
        exercises: [
          ...state.exercises,
          { exercise: action.payload, comment: '' },
        ],
      };
    case 'REMOVE_EXERCISE':
      const updatedExercises = state.exercises.filter(
        (e) => e.exercise._id !== action.payload.exercise._id
      );
      return {
        ...state,
        exercises: updatedExercises,
      };
    case 'ADD_DESCRIPTION':
      console.log(action.payload);
      return { ...state, ...action.payload };
    case 'CLEAN':
      return InitialState;
    default:
      return state;
  }
};

export default sessionReducer;
