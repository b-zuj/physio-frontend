import axios from '../../utils/axios';
import * as authActions from './auth';

export const getAll = () => async (dispatch) => {
  try {
    dispatch(authActions.isLoading(true));
    const response = await axios.get('/exercises/');
    dispatch(loadExercisesToState(response.data));
    dispatch(authActions.isLoading(false));
  } catch (error) {
    dispatch(authActions.isLoading(false));
  }
};

export const loadExercisesToState = (exercisesList) => ({
  type: 'LOAD_NEW_DATA',
  payload: exercisesList,
});
