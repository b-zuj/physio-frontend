import axios from '../../utils/axios';
import * as authActions from './auth';

export const createSession = (sessionData) => {
  return async (dispatch) => {
    // console.log(sessionData);
    const response = await axios.post('/sessions', sessionData);
    if (response.status === 200) {
      dispatch(authActions.tryToAutoLog());
      dispatch(cleanState());
    }
  };
};
export const updateSession = (sessionData, sessionId) => {
  return async (dispatch) => {
    console.log(sessionData, sessionId);
    const response = await axios.put(`/sessions/${sessionId}`, sessionData);
    console.log(response.data);
    if (response.status === 200) {
      dispatch(authActions.tryToAutoLog());
      dispatch(cleanState());
    }
  };
};

export const addExercise = (exercise) => ({
  type: 'ADD_EXERCISE',
  payload: exercise,
});
export const removeExercise = (exercise) => ({
  type: 'REMOVE_EXERCISE',
  payload: exercise,
});
export const addDescription = (formData) => ({
  type: 'ADD_DESCRIPTION',
  payload: formData,
});
export const cleanState = () => ({
  type: 'CLEAN',
});
export const updateExercises = (exercisesList) => ({
  type: 'UPDATE_EXERCISES',
  payload: exercisesList,
});
