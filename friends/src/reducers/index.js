//The combineReducers helper function turns an object whose 
//values are different reducing functions into a single reducing function you can pass to createStore.
//https://redux.js.org/api/combinereducers

import { combineReducers } from 'redux';


import postReducer from './postReducer';

export default combineReducers({
  posts: postReducer
});