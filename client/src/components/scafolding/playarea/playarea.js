import React from 'react';
import {Route} from 'react-router-dom';
import Login from '../../../Authentication/Login'
import PrivateRoute from './../../PrivateRoute'
import DashBoard from './../../DashBoard.js'


import './playarea.css'

const PlayArea = () => {
    return (
        <div className="play-area">
           <Route path="/login" component={Login} />
      
      {/* protected routes */}
      {/* <PrivateRoute path="/dashboard" component={DashBoard} /> */}
        </div>
    )
}

export default PlayArea;