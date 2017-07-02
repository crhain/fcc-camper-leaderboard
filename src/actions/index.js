import { FETCH_DATA } from './types';
import axios from 'axios';

export function fetchData(){ 
    //this is just returning dumy data
    //will make an api call using axios
    return {
                type:FETCH_DATA, 
                payload: [
                    {name: 'Carl', points30: 10, points: 100},
                    {name: 'Bob', points30: 5, points: 50},
                    {name: 'Carol', points30: 25, points: 75}
                ]
            };  
}