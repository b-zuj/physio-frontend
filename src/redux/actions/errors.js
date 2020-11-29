export const addFormError = (errorObject) => ({
  type: 'FORM_ERROR',
  payload: errorObject,
});

export const cleanFormError = () => ({ type: 'CLEAN_FORM_ERROR' });
