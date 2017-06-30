import { FETCH_DATA } from 'types';
import axios from 'axios';

export default function (){ 
    //this is just returning dumy data
    //will make an api call using axios
    return {
                type:FETCH_DATA, 
                payload: [
                    {name: 'Carl'},
                    {name: 'Bob'},
                    {name: 'Carol'}
                ]
            };  
}