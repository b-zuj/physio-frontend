import Cookies from 'js-cookie';
import axios from '../../utils/axios';

export const createSession = (sessionData) => {
  console.log({ sessionData });
  return async (dispatch) => {
    // if (Cookies.get('auth')) {
    // title, description, client, pro
    const response = await axios.post('/sessions');
    console.log(response);
    // const { data } = response;
    //   dispatch(loadUserData(data));
    // }
  };
};
