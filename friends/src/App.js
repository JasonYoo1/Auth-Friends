import {Provider} from 'react-redux';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import store from '../src/store'
import LogInForm from './components/Login'
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <Link to='/login' >Login</Link>
          </div>         
          <Route path='/login' component={LogInForm} />
          <PrivateRoute exact path="/friends" component={FriendsList} />
        </header>
      </div>
    </Router>
    </Provider>
  );
}

export default App;