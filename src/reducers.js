// REDUCERS: searchCatsReducer and requestCatsReducer;

import { 
    CHANGE_SEARCH_FIELD, REQUEST_CAT_PENDING,
    REQUEST_CAT_SUCCESS, REQUEST_CAT_FAILED} from './constants.js';

// Create an initial state/object.
const initialStateSearch = {
    searchField: ''
};

// After initial state added, a reducer (pure function) is defined.
export const searchCatsReducer = (state= initialStateSearch, action={}) => {
    // console.log(action.type);
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
};

// Adding state and reducer function for requesting the Cats users;
const initialStateCats = {
    isPending: false,
    cats: [],
    error: ''
};

export const requestCatsReducer = (state= initialStateCats, action={}) => {
    switch(action.type) {
        case REQUEST_CAT_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_CAT_SUCCESS:
            return Object.assign({}, state, {cats: action.payload, isPending: false});
        case REQUEST_CAT_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default:
            return state;
    }
};