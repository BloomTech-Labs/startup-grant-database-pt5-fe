import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../../../Authentication/Login';
import Search from './../../search/search.js';

import DashBoard from '../../dashboard/DashBoard';
import LandingPage from '../../LandingPage';
import Settings from '../../dashboard/Settings';

import './playarea.css';

const PlayArea = () => {

  return (
    <div className="play-area">
      {/* ALL ROUTES */}
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/search" component={Search} />

      {/* PROTECTED ROUTES */}
      <Route path="/settings" component={Settings} />
      <Route path="/dashboard" component={DashBoard} />
    </div>
  );
};
export default PlayArea;
