import axios from '../../utils/axios';
import * as authActions from './auth';
import * as errorsActions from './errors';

export function updateClient(client, comment) {
  return async (dispatch) => {
    const newClient = JSON.parse(JSON.stringify(client));
    newClient.comment = comment;
    const response = await axios.put(`/clients/${client._id}`, newClient);
    if (response.status === 200) {
      dispatch(authActions.tryToAutoLog());
    }
  };
}
export function cancelInvite(id) {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/invitations/${id}`);
      if (response.status === 200) {
        dispatch(authActions.tryToAutoLog());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function loadUserData(user) {
  return { type: 'LOAD_DATA', payload: user };
}
