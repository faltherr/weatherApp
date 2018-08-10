import {FETCH_WEATHER} from '../actions/index';

//FETCH_WEATHER comes from index
// This gives the action and the reducer the same value
// Take the current cities and add on the action payload
// We do NOT manipulate state directly

export default function(state= [], action){
    // console.log('Action received', action)
    switch(action.type){
        case FETCH_WEATHER:
            return [action.payload.data, ...state] // [cityNew, city, city]

        default:
            return state
    }
}