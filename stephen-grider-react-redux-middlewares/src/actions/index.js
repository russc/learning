import {
    FETCH_USERS,
    FETCH_EVENTS

} from './types';

import { db } from '../fire';
console.log(db);


export function fetchUsers() {
    return{
        type: FETCH_USERS,
        payload: [
            { name: 'Jane'},
            { name: 'Alex'},
            { name: 'Jim'},
        ]
    };
}

let events = [
    { name: 'Christmas' },
    { name: 'Birthday' },
    { name: 'Halloween' },
];

events.push({name: "easter"});
export function fetchEvents() {
    return{
        type: FETCH_EVENTS,
        payload: events
    };
}
