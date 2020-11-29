const InitialState = {
  formErrors: {},
};

const errorReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'FORM_ERROR':
      return {
        ...state,
        formErrors: action.payload,
      };
    case 'CLEAN_FORM_ERROR':
      return {
        ...state,
        formErrors: {},
      };
    default:
      return state;
  }
};

export default errorReducer;
