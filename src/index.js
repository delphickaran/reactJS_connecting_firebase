import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {createStore} from 'redux';
import allReducers from './reducers/main';
import {Provider} from 'react-redux';


const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);

