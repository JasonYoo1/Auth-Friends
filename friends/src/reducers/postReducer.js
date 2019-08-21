import { FETCH_START, 
        FETCH_SUCCESS, 
        FETCH_FAIL, POST_LOGIN , 
        POST_SUCCESS, 
        POST_FAIL, 
        NEW_LOGIN, 
        NEW_SUCCESS,
        NEW_FAIL } from '../actions/index';

import { axiosWithAuth } from '../Auth/axiosWithAuth';




const initialState = {
    friends: [],
    dataError: '',
    credentials: {
        username: '', 
        password: '',
    },
    credError: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
        return {
            ...state,
            dataError: ''
        };
    case FETCH_SUCCESS:
        return {
            ...state,
            friends: action.payload,
            dataError: ''
        };
    case FETCH_FAIL:
        return {
            ...state,
            dataError: action.payload
        };
    case POST_LOGIN:
        return {
            ...state,
            credError: ''
        };
    case POST_SUCCESS:
        return {
            ...state,
            credError: ''
        };
    case POST_FAIL:
        return {
            ...state,
            credError: ''
        };
    case NEW_LOGIN:
        return {
            ...state,
            credError: ''
        };
    case NEW_SUCCESS:
        return {
            ...state,
            credError: ''
        };
    case NEW_FAIL:
        return {
            ...state,
            credError: ''
        };
      default:
          return state
  }
}

export default reducer 