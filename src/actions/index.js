import { FETCH_DATA, SORT_DATA_BY_RECENT_POINTS, SORT_DATA_BY_POINTS, SORT_DATA_BY_NAME  } from './types';
import axios from 'axios';

export function fetchData(){ 
    //this is just returning dumy data
    //will make an api call using axios
    const data = axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
    return {
                type:FETCH_DATA, 
                payload: data
            };  
}

export function sortDataByRecentPoints(){
    return {
        type: SORT_DATA_BY_RECENT_POINTS,
        payload: ''
    }
}

export function sortDataByPoints(){
    return {
        type: SORT_DATA_BY_POINTS,
        playload: ''
    }
}

export function sortDataByName(){
    return {
        type: SORT_DATA_BY_NAME,
        payload: ''
    }

}