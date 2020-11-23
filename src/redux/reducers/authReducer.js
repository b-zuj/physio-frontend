const InitialState = {
  something: "Best state ever",
};

const authReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action.payload);
      return state;
    default: {
      return state;
    }
  }
};

export default authReducer;
