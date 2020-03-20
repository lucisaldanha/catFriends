import React from 'react';
import ReactDOM from 'react-dom';
// Adding React Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'; //importing functions from redux; 
import { searchCatsReducer, requestCatsReducer } from './reducers.js'; //imports reducer searchCats, then requestCatsReducer;
import logger from 'redux-logger'; //importing Logger function(middleware) with default options from redux-logger package
import thunk from 'redux-thunk'; //imports thunk middleware to handle async calls
import App from './containers/App';
// CSS Toolkit
import 'tachyons';
// object rootReducer that will contain all reducers;
const rootReducer = combineReducers( {searchCatsReducer, requestCatsReducer } )

// applying middleware logger for development and testing;
// thunk will be applied to handle async calls;
const store = 
    createStore(rootReducer,applyMiddleware(thunk,logger)); 
// we remove state from react app and keep it inside of this store;
// we pass state down with store as a prop to App component;
// we pass reducers to createStore function;

ReactDOM.render(
    // Redux component Provider, passing store down to App.js smart component
    <Provider store={store} >
        <App />
    </Provider>, document.getElementById('root')
);



