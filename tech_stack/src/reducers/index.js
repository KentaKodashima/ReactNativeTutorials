import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  // Assign LibraryReducer to the key called 'libraries'
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});