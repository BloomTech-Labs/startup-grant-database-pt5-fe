import React from 'react';
import './App.css';

import { Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import DashBoard from './components/dashboard/DashBoard';
import Settings from './components/dashboard/Settings';
import LandingPage from './components/LandingPage';
import Login from './Authentication/Login';
import PrivateRoute from './components/PrivateRoute';
import UserList from "./components/userList_test";
 
import TopBar from './components/scafolding/topbar/topbar.js';
import PlayArea from '../src/components/scafolding/playarea/playarea.js';

import SearchHolder from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <TopBar />
      <PlayArea/>
      <NavBar />
      <UserList />
    
      {/* ALL ROUTES */}
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />

      {/* PROTECTED ROUTES */}
      <Route path="/settings" component={Settings} />
      <PrivateRoute path="/dashboard" component={DashBoard} />

     

    </div>
  );
}

export default App;
