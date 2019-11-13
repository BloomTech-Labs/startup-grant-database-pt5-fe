import React, { useEffect, useState } from "react";
// import useGlobal from '../store';
import { firebase } from "../helpers/index";

const firebaseUser = require("firebase");

const Login = props => {
  //to use the  action for passing the user data to the api
  //   const [globalState, globalActions] = useGlobal();

  useEffect(() => {
    firebase();
    //Manage Users below after sign in/sign up but it was moved to the
    //login component to send the request to api using hooks
    firebaseUser.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        //Get token to pass to headers for PrivateRoute to authenticate user
        console.log("You are currently logged in!");
        user.getIdToken().then(token => {
          //   console.log(token);
          localStorage.setItem("authorization", token);
          //passing the user info to server
          // globalActions.Login(user);
        });
      } else {
        // No user is signed in.
        console.log("You are currently logged out");
        localStorage.removeItem("authorization");
      }
    });
  }, [props]);

  return (
    <div>
      {/* {requestError === 400 && (
        <h4 className="alert">Unauthorized, try again later.</h4>
      )} */}
      <div id="firebaseui-auth-container"></div>
      <div id="loader"></div>
    </div>
  );
};

export default Login;
