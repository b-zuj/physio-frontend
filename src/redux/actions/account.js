import axios from '../../utils/axios';
import * as authActions from './auth';

export function updateAccount(accountData) {
  return async (dispatch) => {
    const response = await axios.put(`/pros/${accountData._id}`, accountData);
    if (response.status === 200) {
      dispatch(authActions.tryToAutoLog());
    }
  };
}
