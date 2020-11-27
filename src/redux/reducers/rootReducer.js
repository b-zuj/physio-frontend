import { combineReducers } from 'redux';
import authReducer from './authReducer';
import exercisesReducer from './exercisesReducer';

export default combineReducers({
  authReducer,
  exercisesReducer,
});
