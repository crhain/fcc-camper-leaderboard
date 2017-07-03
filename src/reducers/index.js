import { combineReducers } from 'redux';
//import each reducer here and set some state property in the rootReducer to equal the imported function
import campersReducer from './reducer_campers';

const rootReducer = combineReducers({
  campers: campersReducer
});

export default rootReducer;