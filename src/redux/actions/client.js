import axios from '../../utils/axios';
import * as authActions from './auth';

export function updateClient(client, comment) {
  return async (dispatch) => {
    const newClient = JSON.parse(JSON.stringify(client));
    newClient.comment = comment;
    const response = await axios.put(`/clients/${client._id}`, newClient);
    if (response.status === 200) {
      dispatch(authActions.tryToAutoLog());
    }
    // const clientIndex = user.clients.findIndex(
    //   (client) => client._id === clientId
    // );
    // const newUser = JSON.parse(JSON.stringify(user));
    // newUser.clients[clientIndex].comments = comment;
    // dispatch(loadUserData(newUser));
  };
}

export function loadUserData(user) {
  return { type: 'LOAD_DATA', payload: user };
}
