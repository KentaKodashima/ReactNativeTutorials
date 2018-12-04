import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
  // Assign LibraryReducer to the key called 'libraries'
  libraries: LibraryReducer
});