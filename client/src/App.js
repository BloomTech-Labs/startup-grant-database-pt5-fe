import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './Authentication/Login';

function App() {
  return (
    <div className="App">
      <p>Hello world</p>
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
