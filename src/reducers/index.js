import { combineReducers } from 'redux';
//import each reducer here and set some state property in the rootReducer to equal the imported function
import fetchDataReducer from './fetch-data';

const rootReducer = combineReducers({
  campers: fetchDataReducer
});

export default rootReducer;