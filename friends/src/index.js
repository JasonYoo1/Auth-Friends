
//created store, middleware, initial state
//imported compose for my redux extension
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),

);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
rootElement);

export default store;