import React, { useEffect, useState } from 'react';
// import useGlobal from '../store';
import { firebase } from '../helpers/index';
//importing axios for http request to api
import axios from 'axios';

const firebaseUser = require('firebase');

const Login = props => {
  //State
  const [isUnauthorized, setIsUnauthorized] = useState(false);

  useEffect(() => {
    firebase();
    //HTTP request to API
    firebaseUser.auth().onAuthStateChanged(function(currentUser) {
      if (currentUser) {
        currentUser
          .getIdToken(/* forceRefresh */ false)
          .then(function(idToken) {
            // console.log(idToken);
            const token = { idToken: idToken };
            // ...TODO: Update URL after testing
            axios
              .post(`http://localhost:3000/api/login`, token)
              .then(res => {
                //Succesful login
                console.log('Successful login', res.status);
                localStorage.setItem('authorization', idToken);
                props.history.push('/dashboard');
              })
              .catch(err => {
                //Invalid token
                console.log('Invalid Token', err);
                setIsUnauthorized(true);
              });
          })
          .catch(function(error) {
            // Handle error
            console.log('Error occur during last catch http request', error);
          });
      } else {
        //User is currently logged out.
        console.log('You are currently logged out');
        //Remove token from headers
        localStorage.removeItem('authorization');
        localStorage.removeItem('firebaseui::rememberedAccounts');
      }
    });
  }, []);

  return (
    <div>
      <div id="firebaseui-auth-container"></div>
      <div id="loader"></div>
      {isUnauthorized && <h3 className="alert">Unauthorized, try again!</h3>}
    </div>
  );
};

export default Login;
