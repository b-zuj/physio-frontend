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
      dispatch(isLoading(true));
      const response = await axios.get('/auth/login');
      const { data } = response;
      dispatch(loadUserData(data));
      dispatch(isLoading(false));
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
  // console.log('signup action', credentials);
  // {email, name, password}
  return async (dispatch) => {
    const response = await axios.post('/auth/signup', credentials);
    const { user } = response.data.data;
    dispatch(loadUserData(user));
  };
}

export function signupClient(credentials) {
  console.log('signup Client action', credentials);
  // {email, name, password, pro}
  return async (dispatch) => {
    const response = await axios.post('/auth/client/signup', credentials);
    console.log(response);
    const { user } = response.data.data;
    dispatch(loadUserData(user));
  };
}

export const isLoading = (bool) => ({ type: 'IS_LOADING', payload: bool });
