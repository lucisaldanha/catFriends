import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchCats } from './reducers.js';


import App from './containers/App';

import 'tachyons';

const store = createStore(searchCats); // we can remove all state from react app and keep it inside of this store.
// we can pass state down the store as a prop.

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, document.getElementById('root')
);



