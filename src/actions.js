// We add here all Actions functions that will be dispatch to change 
// the state tree.

// Importanting const CHANGE_SEARCH_FIELD constant.
import { CHANGE_SEARCH_FIELD } from './constants.js';

// First create setSearchField Action which receives 'text' as input
// (user input), returning an object with type(action type) and payload
// (keys).
export const setSearchField = (text) => ({
    // console.log(text);
    type: CHANGE_SEARCH_FIELD, // user input typing on search box     
    payload: text     // type of data
}); 