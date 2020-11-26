const InitialState = {
  isAuth: false,
  error: '',
};

const authReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return InitialState;
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default authReducer;
