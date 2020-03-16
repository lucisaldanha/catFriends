// We add here all Actions that will be dispatch to change the state tree. 

import { CHANGE_SEARCH_FIELD } from './constants.js';

// First created setSearchField Action, that receives 'text' as input, the user input,
// returning an object with type(action type) and payload keys and values.
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD, // user input typing on search box     
    payload: text     // type of data
});