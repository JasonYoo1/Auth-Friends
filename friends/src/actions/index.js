import axios from 'axios';

import { axiosWithAuth } from '../Auth/axiosWithAuth';


export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'

export const POST_LOGIN = 'POST_LOGIN'; 
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_FAIL = 'POST_FAIL'

export const NEW_LOGIN = 'NEW_LOGIN'; 
export const NEW_SUCCESS = 'NEW_SUCCESS'
export const NEW_FAIL = 'NEW_FAIL'

export const login = () => dispatch => {
    dispatch({ type: FETCH_START });
    axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
        console.log("success start", res)
        dispatch({ type: POST_SUCCESS, payload: res.data });
    })
    .catch(error => {
        dispatch({ type: FETCH_FAIL, payload: error.res });
    });
}

export const createPost = (credentials) => dispatch => {
    dispatch({type: POST_LOGIN})
    axios.post('http://localhost:5000/api/login', credentials)
    .then(res=>{
        console.log('token?', res)
    })
    .catch(error => {
        // unsuccessful 
        console.log("The api is currently down.", error.res);
        dispatch({type: POST_FAIL, payload: error.res});
    });
}

export const newFriend = (props) => (dispatch) => {
    dispatch({ type: NEW_LOGIN });
    axiosWithAuth()
        .post('http://localhost:5000/api/friends', props)
        .then(res => {
            // successful 
            console.log("pushed?", res);
            dispatch({ type: NEW_SUCCESS, payload: res });
        })
        .catch(error => {
            // unsuccessful 
            console.log("The api is currently down.", error.res);
            dispatch({ type: NEW_FAIL, payload: error.res });
        });
    };