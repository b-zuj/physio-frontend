import axios from '../../utils/axios';

export function getClient(clientId) {
  return async (dispatch) => {
    const response = await axios.get(`/clients/${clientId}`);
    // const { client } = response.data.data;
    console.log(response);
    // dispatch(loadClientData(client));
  };
}

export function updateClient(clientId, comment, user) {
  return async (dispatch) => {
    const clientIndex = user.clients.findIndex(
      (client) => client._id === clientId
    );
    // const client = user.clients.find((client) => client._id === clientId);
    // const newClient = JSON.parse(JSON.stringify(client));
    // newClient.comments = comment;
    // const response = await axios.put(`/clients/${clientId}`, newClient);

    const newUser = JSON.parse(JSON.stringify(user));
    newUser.clients[clientIndex].comments = comment;
    dispatch(loadUserData(newUser));
  };
}

export function loadUserData(user) {
  return { type: 'LOAD_DATA', payload: user };
}

// export function loadClientData(client) {
//   return { type: 'LOAD_DATA', payload: client };
// }
