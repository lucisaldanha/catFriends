import { CHANGE_SEARCH_FIELD } from './constants.js';

// Create an initial state/object.
const initialState = {
    searchField: ''
};

// After initial state added, a reducer (pure function) is defined.
export const searchCats = (state= initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
};

