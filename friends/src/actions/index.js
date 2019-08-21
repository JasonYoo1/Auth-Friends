import axios from 'axios';

import { axiosWithAuth } from '../Auth/axiosWithAuth';


export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'

export const POST_LOGIN = 'POST_LOGIN'; 


export const login = () => dispatch => {
    dispatch({ type: FETCH_START });
    axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
        console.log("success start", res)
    })
    .catch(error => {
        dispatch({ type: FETCH_FAIL, payload: error.response });
    });
}

export const createPost = (postData) => dispatch => {
    dispatch({type: POST_LOGIN})
    // console.log('action called on create ')
    axios.post('http://localhost:5000/api/login', this.state.credentials)
    .catch(error => {
        // unsuccessful 
        console.log("The api is currently down.", error.response);
        dispatch(error.response);
    });
}

