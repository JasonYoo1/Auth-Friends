import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL,POST_LOGIN } from '../actions/index';


const initialState = {
    friends: [],
    dataIsLoading: false, 
    dataError: '',
    credentials: {
        username: '', 
        password: '',
    },
    credIsLoading: false,
    credError: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
        return {
            ...state,
            dataIsLoading: true,
            dataError: ''
        };
    case FETCH_SUCCESS:
        return {
            ...state,
            dataIsLoading: false,
            friends: action.payload,
            dataError: ''
        };
    case FETCH_FAIL:
        return {
            ...state,
            dataIsLoading: false,
            dataError: action.payload
        };
    case POST_LOGIN:
        return {
            ...state,
            credIsLoading: true,
            credError: ''
        };
      default:
          return state
  }
}

export default reducer 