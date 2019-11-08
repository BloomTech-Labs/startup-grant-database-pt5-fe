import React from "react";
import Button from "@material-ui/core/Button";
import { Route, Link } from "react-router-dom";
import Login from "../Authentication/Login";

const firebase = require("firebase/app");
require("firebase/auth");

const NavBar = props => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/dashboard">DashBoard (Private)</Link>
      <br />
      <Route path="/login" component={Login} />
      <Button
        onClick={e => {
          firebase
            .auth()
            .signOut()
            .then(function() {
              // Sign-out successful.
              props.history.push("/login");
            })
            .catch(function(error) {
              // An error happened.
              console.log("There was an issue while signing out!");
            });
        }}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default NavBar;
