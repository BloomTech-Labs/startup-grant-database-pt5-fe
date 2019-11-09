import React from 'react';
import {Route} from 'react-router-dom';
import Login from '../../../Authentication/Login';
import PrivateRoute from './../../PrivateRoute';
import Search from './../../search/search.js';
//import DashBoard from './../../DashBoard.js'


import './playarea.css'

const PlayArea = () => {
    return (
        <div className="play-area">
           <Route path="/login" component={Login} />
           <Route path="/search" component={Search} />
      {/* protected routes */}
      {/* <PrivateRoute path="/dashboard" component={DashBoard} /> */}
        </div>
    )
}

export default PlayArea;