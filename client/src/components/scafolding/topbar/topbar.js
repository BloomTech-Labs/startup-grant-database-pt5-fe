import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
//IMPORT LINK AGAIN

import "./Grantify.png";
import "./topbar.css";

const firebase = require("firebase/app");
require("firebase/auth");

const TopBar = props => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setIsLogin(true);
      }
    });
  }, []);

  return (
    <div className="top-bar">
      <div className="logo">
        <img alt="logo" src={require("./Grantify.png")} />
      </div>
      <div className="nav-links">
        <NavLink exact to="/">
          Home
        </NavLink>
        <br />
        <NavLink to="/search">Search</NavLink>
        <br />
        {isLogin ? (
          <NavLink
            onClick={e => {
              firebase
                .auth()
                .signOut()
                .then(function() {
                  // Sign-out successful.
                  console.log("Successful Loged out!");
                  setIsLogin(false);
                })
                .catch(error => {
                  // An error happened.
                  console.log("There was an issue while signing out!", error);
                });
            }}
            to="/login"
          >
            Sign Out
          </NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default TopBar;
