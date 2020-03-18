import React from 'react';
import ReactDOM from 'react-dom';
// Adding React Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchCats } from './reducers.js';

import App from './containers/App';
// CSS Toolkit
import 'tachyons';

const store = createStore(searchCats); // we remove all state from react app and keep it inside of this store.
// we pass state down the store as a prop.

ReactDOM.render(
    // Redux component Provider, passing store down to App.js smart component
    <Provider store={store} >
        <App />
    </Provider>, document.getElementById('root')
);



