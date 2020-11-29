import Cookies from 'js-cookie';
import axios from '../../utils/axios';

export function login(credentials) {
  return async (dispatch) => {
    try {
      const response = await axios.post('/auth/login', credentials);
      const { user } = response.data.data;
      const userPopulatedData = await dispatch(
        fetchUserData(user._id, user.userType)
      );
      dispatch(loadUserData(userPopulatedData));
    } catch (error) {}
  };
}

export const tryToAutoLog = () => {
  return async (dispatch) => {
    if (Cookies.get('auth')) {
      dispatch(isLoading(true));
      try {
        const response = await axios.get('/auth/login');
        const { data } = response;
        const userPopulatedData = await dispatch(
          fetchUserData(data._id, data.userType)
        );
        console.log({ userPopulatedData });
        dispatch(loadUserData(userPopulatedData));
        dispatch(isLoading(false));
      } catch (error) {
        dispatch(isLoading(false));
      }
    }
  };
};

export const fetchUserData = (_id, userType) => {
  return async () => {
    if (userType === 'pro') {
      const userResponse = await axios.get(`/pros/${_id}`);
      if (userResponse.status === 200) return userResponse.data;
    }
    if (userType === 'client') {
      const userResponse = await axios.get(`/clients/${_id}`);
      if (userResponse.status === 200) return userResponse.data;
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
  // {email, name, password}
  return async (dispatch) => {
    const response = await axios.post('/auth/signup', credentials);
    const { user } = response.data.data;
    dispatch(loadUserData(user));
  };
}

export function signupClient(credentials) {
  // {email, name, password, pro}
  return async (dispatch) => {
    const response = await axios.post('/auth/client/signup', credentials);
    const { user } = response.data.data;
    dispatch(loadUserData(user));
  };
}

export const isLoading = (bool) => ({ type: 'IS_LOADING', payload: bool });
