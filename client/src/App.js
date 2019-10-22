import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Login from './Authentication/Login';
import DashBoard from './components/DashBoard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/dashboard">DashBoard (Private)</Link>
      <br />
      <h1>Hello world</h1>
      <Route path="/login" component={Login} />

      {/* protected routes */}
      <PrivateRoute path="/dashboard" component={DashBoard} />
    </div>
  );
}

export default App;
