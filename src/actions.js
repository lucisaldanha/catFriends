// ACTIONS: setSearchField and requestCats;
// We add here all Actions functions that will be dispatch to change 
// the state tree;

// Importanting CHANGE_SEARCH_FIELD, and other constants;
import { 
    CHANGE_SEARCH_FIELD, REQUEST_CAT_PENDING,
    REQUEST_CAT_SUCCESS, REQUEST_CAT_FAILED } from './constants.js';

// create setSearchField Action which receives 'text' as input
// (user input), returning an object with type(action type) and payload
// (name keys);
export const setSearchField = (text) => ({
    // console.log(text);
    type: CHANGE_SEARCH_FIELD, // user input typing on search box     
    payload: text     // type of data
}); 

// Adding action for an API call, async call, to fetch users. Action requestCats will provide
// the dispatch function to the second layer function; 
export const requestCats = () => (dispatch) => {
    dispatch( {type: REQUEST_CAT_PENDING} );// when action occurs, dispatch pending to reducer;
    fetch('https://jsonplaceholder.typicode.com/users') // fetch users; 
		.then(response => response.json()) // when it returns users response; will dispatch
        .then(data => dispatch( {type:REQUEST_CAT_SUCCESS, payload: data} )) // either a success with a payload of users;
        .catch(error => dispatch( {type:REQUEST_CAT_FAILED, payload: error} )) // or a payload of error;
};