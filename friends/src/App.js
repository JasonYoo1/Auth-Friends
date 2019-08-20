import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Login from './components/Friends';
import HomePage from './components/HomePage'

function App() {
  return (
    <Router>
      <div className="App">
        <Route
          path='/'
          exact
          render={() => (
            <HomePage />
          )}
        />
          <Route
          path='/login'
          render={props => (
            <Login {...props} />
          )}
        />
      </div>
    </Router>
  );
}

export default App; 