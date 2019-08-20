
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login'


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <Link to='/login' >Login</Link>
          </div>         
          <Route path='/login' component={Login} />
        </header>
      </div>
    </Router>
  );
}

export default App;