import axios from '../../utils/axios';

// export function getClient(clientId) {
//   return async (dispatch) => {
//     const response = await axios.get(`/clients/${clientId}`);
//     const { client } = response.data.data;
//     dispatch(loadClientData(client));
//   };
// }

export function updateClient(client) {
  return async (dispatch) => {
    // const response = await axios.put(`/clients/${client._id}`, client);
    console.log(client);
  };
}

// export function loadClientData(client) {
//   return { type: 'LOAD_DATA', payload: client };
// }
