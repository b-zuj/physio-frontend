const InitialState = {
  title: '',
  description: '',
  client: '',
  exercises: [],
};

const sessionReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'STORE_SESSION':
      return action.payload;
    case 'ADD_EXERCISE':
      return {
        ...state,
        exercises: [
          ...state.exercises,
          { exercise: action.payload, comment: '' },
        ],
      };
    case 'REMOVE_EXERCISE':
      console.log('REMOVE_EXERCISE', action.payload);
      console.log('REMOVE_EXERCISE', state);
      const updatedExercises = state.exercises.filter(
        (e) => e.exercise._id !== action.payload.exercise._id
      );
      return {
        ...state,
        exercises: updatedExercises,
      };
    case 'ADD_DESCRIPTION':
      return { ...state, ...action.payload };
    // case 'UPDATE_EXERCISES':
    //   console.log(action.payload);
    //   return { ...state, exercises: action.payload };
    case 'CLEAN':
      return {
        title: '',
        description: '',
        client: '',
        exercises: [],
      };
    default:
      return state;
  }
};

export default sessionReducer;
