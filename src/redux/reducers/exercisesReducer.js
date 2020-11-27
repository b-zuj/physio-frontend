const InitialState = [];

const exercisesReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'LOAD_NEW_DATA':
      console.log(action);
      return action.payload;
    default:
      return state;
  }
};

export default exercisesReducer;
