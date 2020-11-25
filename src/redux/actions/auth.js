import Cookies from 'js-cookie';
import axios from '../../utils/axios';

export function login(credentials) {
  return async (dispatch) => {
    const response = await axios.post('/auth/login', credentials);
    const { user } = response.data.data;
    dispatch(loadUserData(user));
  };
}

export const tryToAutoLog = () => {
  return async (dispatch) => {
    if (Cookies.get('auth')) {
      const response = await axios.get('/auth/login');
      const { data } = response;
      dispatch(loadUserData(data));
    }
  };
};

export function loadUserData(user) {
  return { type: 'LOAD_DATA', payload: user };
}

export function logout() {
  Cookies.remove('auth');
  return { type: 'LOGOUT' };
}

export function signup(credentials) {
  console.log('signup action', credentials);
  return async (dispatch) => {
    const response = await axios.post('/auth/signup', credentials);
    const { user } = response.data.data;
    dispatch(loadUserData(user));
  };
  return { type: 'SIGNUP' };
}

export function handleError(errorMessage) {
  return { type: 'ERROR', payload: errorMessage };
}
