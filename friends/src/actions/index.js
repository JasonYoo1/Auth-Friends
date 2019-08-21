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

export const login = (user) => dispatch => {
    dispatch({ type: FETCH_START });
    axios.post('http://localhost:5000/api/login', user)
    .then(res => {
        localStorage.setItem('token', res.data.payload);
        dispatch({ type: POST_SUCCESS });
    })
    .catch(error => {
        dispatch({ type: FETCH_FAIL, payload: error.res });
    });
}

export const createPost = () => dispatch => {
    dispatch({ type: POST_LOGIN });
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
        console.log("friend?", res.data)
        dispatch({ type: POST_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: POST_FAIL, payload: err.response });
      });
  };

export const newFriendData = (props) => (dispatch) => {
    dispatch({ type: NEW_LOGIN });
    axiosWithAuth()
        .post('./friends', props)
        .then(res => {
            console.log("pushed?", res);
            dispatch({ type: NEW_SUCCESS, payload: res });
        })
        .catch(error => {
            dispatch({ type: NEW_FAIL, payload: error.res });
        });
    };