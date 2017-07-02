import { FETCH_DATA } from './types';
import axios from 'axios';

export function fetchData(){ 
    //this is just returning dumy data
    //will make an api call using axios
    return {
                type:FETCH_DATA, 
                payload: [
                    {username: 'Carl', img: '', recent: 5, alltime: 150},
                    {username: 'Bob', img: '', recent: 15, alltime: 100},
                    {username: 'Carol', img: '', recent: 20, alltime: 75}
                ]
            };  
}