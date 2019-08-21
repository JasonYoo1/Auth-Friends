
//created store, middleware, initial state
//imported compose for my redux extension

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {};

const middleware = [thunk];


// createstore(reducer, initial state, enhancer aka middleware) 
// this variable store is used inside Provider inside App.js
const store = createStore(
  rootReducer,
  initialState,
  //this is my chrome extension for redux
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;