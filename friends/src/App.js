import {Provider} from 'react-redux';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import store from '../src/store'
import LogInForm from './components/Login'


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
        </header>
      </div>
    </Router>
    </Provider>
  );
}

export default App;