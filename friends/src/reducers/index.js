import { LOGIN_START, FETCH_START, FETCH_SUCCESS, FETCH_FAILURE
} from '../actions/index'

const initialState = {
  friends: [],
  error: '',
  errorStatusCode: null,
  fetchingData: false,
  isLoggingIn: false
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
      default:
          return state
  }
}

export default rootReducer 