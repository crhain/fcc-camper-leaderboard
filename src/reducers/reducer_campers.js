import { FETCH_DATA, SORT_DATA_BY_RECENT_POINTS, SORT_DATA_BY_POINTS, SORT_DATA_BY_NAME  } from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case FETCH_DATA:
            return [...state, ...action.payload.data];
        case SORT_DATA_BY_RECENT_POINTS:
            //console.log(state);            
            return [...state.sort((first, second) => second.recent - first.recent)];
        case SORT_DATA_BY_POINTS:        
            return [...state.sort((first, second) => second.alltime- first.alltime)];
        case SORT_DATA_BY_NAME:
            return [...state.sort((first, second) => { 
                if(first.username > second.username){
                    return 1;
                } else if(first.username < second.username) {
                    return -1;
                } else {
                    return 0;
                }                
            })];        
        default: 
            return state;
    }
    
}