import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Login from './Authentication/Login';
import DashBoard from './components/DashBoard';
import PrivateRoute from './components/PrivateRoute';

import TopBar from './components/scafolding/topbar/topbar.js';
import PlayArea from '../src/components/scafolding/playarea/playarea.js';

import SearchHolder from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <TopBar />
      <PlayArea/>
    </div>
  );
}

export default App;
