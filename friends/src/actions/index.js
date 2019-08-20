import axios from 'axios';

import { axiosWithAuth } from '../utils/axiosWithAuth';


export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START })
  return axios
    .post('http://localhost:5000/api/login', creds)
    .then(res => localStorage.setItem("token", res.data.payload))
}


export const friendsData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axiosWithAuth()
      .get('http://localhost:5000/api/friends', {
        headers: { Authorization: localStorage.getItem('token') }
      })
      .then(res => {
        dispatch({ type: FETCH_DATA_SUCCESS, 
          payload: res.data });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({ type: FETCH_DATA_FAILURE, 
          payload: err.response.error });
      });
  };
  