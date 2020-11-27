import axios from '../../utils/axios';
import * as authActions from './auth';

export const createSession = (sessionData) => {
  return async (dispatch) => {
    const response = await axios.post('/sessions', sessionData);
    if (response.status === 200) {
      dispatch(authActions.tryToAutoLog());
    }
  };
};
