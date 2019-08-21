import { FETCH_START, 
        FETCH_SUCCESS, 
        FETCH_FAIL, POST_LOGIN , 
        POST_SUCCESS, 
        POST_FAIL, 
        NEW_LOGIN, 
        NEW_SUCCESS,
        NEW_FAIL } from '../actions/index';



const initialState = {
    friends: [], 
    token:localStorage.getItem('token'),
    loginError: '',
    addFriend: '',
    getFriendError: '',
  };

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
        return {
            ...state,
            loginError: '',
        };
    case FETCH_SUCCESS:
        return {
            ...state,
            loginError: '',
            token: action.payload,
        };
    case FETCH_FAIL:
        return {
            ...state,
            loginError: action.payload,
        };
    case POST_LOGIN:
        return {
            ...state,
            getFriendError: '',
        };
    case POST_SUCCESS:
        return {
            ...state,
            getFriendError: '',
            friends: action.payload,
        };
    case POST_FAIL:
        return {
            ...state,
            getFriendError: action.payload,
            friends: [],
        };
    case NEW_LOGIN:
        return {
            ...state,
            addFriendsError: '',
        };
    case NEW_SUCCESS:
        return {
            ...state,
            addFriendsError: '',
            friends: [...state.friends, action.payload],
        };
    case NEW_FAIL:
        return {
            ...state,
            addFriendsError: action.payload,
        };
      default:
          return state
  }
}

export default reducer 