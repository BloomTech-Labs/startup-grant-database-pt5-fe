import React, { useEffect, useState } from 'react';
// import useGlobal from '../store';
import { firebase } from '../helpers/index';
//importing axios for http request to api
import axios from 'axios';

//Requiring only the packages
const firebaseUser = require('firebase/app');
require('firebase/auth');

const Login = props => {
  const [requestError, setRequestError] = useState('');

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
              .post(`${process.env.REACT_APP_API}/api/users/login`, token)
              .then(res => {
                //Succesful login
                // console.log('Successful login', res.status);
                localStorage.setItem('authorization', idToken);
                props.history.push('/dashboard');
              })
              .catch(err => {
                //Invalid token
                console.log('Invalid Token or DB currently down', err);
                setRequestError(err.response.status);
              });
          })
          .catch(function(error) {
            // Handle error
            console.log('Error occur during last catch http request', error);
            setRequestError(error.response.status);
          });
      } else {
        //User is currently logged out.
        console.log('You are currently logged out');
        //Remove token from headers
        localStorage.removeItem('authorization');
        localStorage.removeItem('firebaseui::rememberedAccounts');
      }
    });
  }, [props]);

  return (
    <div>
      {requestError === 400 && (
        <h4 className="alert">Unauthorized, try again later.</h4>
      )}
      <div id="firebaseui-auth-container"></div>
      <div id="loader"></div>
    </div>
  );
};

export default Login;
