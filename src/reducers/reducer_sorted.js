import { SORT_DATA_BY_RECENT_POINTS, SORT_DATA_BY_POINTS, SORT_DATA_BY_NAME  } from '../actions/types';

export default function(state={by: 'recent', order: 'asc'}, action){
    switch(action.type){
        case SORT_DATA_BY_RECENT_POINTS:
            return {...state, by: 'recent', order: action.payload};
        case SORT_DATA_BY_POINTS:             
            return {...state, by: 'points', order: action.payload};
        case SORT_DATA_BY_NAME:    
            return {...state, by: 'name', order: action.payload};
        default:            
            return state;
    }
}