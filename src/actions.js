// We add here all Actions functions that will be dispatch to change 
// the state tree.

// Importanting const CHANGE_SEARCH_FIELD constant.
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_CAT_PENDING,
    REQUEST_CAT_SUCCESS,
    REQUEST_CAT_FAILED
} from './constants.js';

// First create setSearchField Action which receives 'text' as input
// (user input), returning an object with type(action type) and payload
// (keys).
export const setSearchField = (text) => ({
    // console.log(text);
    type: CHANGE_SEARCH_FIELD, // user input typing on search box     
    payload: text     // type of data
}); 

// Adding redux action for the API call, async call, for the users, the fetch call
export const requestCats = (dispatch) => {
    dispatch( {type: REQUEST_CAT_PENDING} );// when calling action dispatch this line
    fetch('https://jsonplaceholder.typicode.com/users') // we fetch users
		.then(response => response.json()) // we receive the users
        .then(data => dispatch( {type:REQUEST_CAT_SUCCESS, payload: data} )) // we either have a success with a payload of users
        .catch(error => dispatch( {type:REQUEST_CAT_FAILED, payload: error} )) // or a payload with the payload of error
}