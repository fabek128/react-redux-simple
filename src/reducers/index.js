import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import wordReducers from './wordReducer';

export default combineReducers({
  wordReducers,
  FormReducer,
});