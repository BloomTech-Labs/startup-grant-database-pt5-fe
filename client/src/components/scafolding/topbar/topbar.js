import React from 'react';
import { NavLink } from 'react-router-dom';
import './Grantify.png';
import './topbar.css';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="logo">

                <img alt="Grantlify" src={require('./Grantify.png')}/>
            </div>
            <div className="nav-links">
                <NavLink exact to="/">Home</NavLink>
                <br />
                <NavLink to="/search">Search</NavLink>
                <br/>
                <NavLink to="/login">Login</NavLink>
                <br />
                {/* <NavLink to="/dashboard">DashBoard (Private)</NavLink> */}
                <br />
            </div>
        </div>
    )    
}

export default TopBar;