import { FETCH_DATA } from './types';
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