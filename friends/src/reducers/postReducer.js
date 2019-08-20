//The combineReducers helper function turns an object whose 
//values are different reducing functions into a single reducing function you can pass to createStore.
//https://redux.js.org/api/combinereducers


const initialState = {
    friends: []
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  export default postReducer;