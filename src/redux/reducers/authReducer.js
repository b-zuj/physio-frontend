const InitialState = {
  isAuth: false,
  accType: "pro",
};

const authReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuth: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuth: false,
      };
    default: {
      return state;
    }
  }
};

export default authReducer;
