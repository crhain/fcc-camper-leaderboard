//import { DEFAULT_ACTION  } from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case 'CHANGE_AUTH':
            return action.payload;
        default: 
            return state;
    }
    
}