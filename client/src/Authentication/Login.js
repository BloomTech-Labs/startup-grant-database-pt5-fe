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
            // console.log('Token: ', idToken);
            const token = { idToken: idToken };
            axios
              .post(`${process.env.REACT_APP_API}/api/users/login`, token)
              .then(res => {
                //Succesful login

                //SAVE USER ID TO LOCAL STORAGE
                const id = res.data.id;
                // console.log('User ID', id);
                localStorage.setItem('id', id);

                // SAVE TOKEN TO LOCAL STORAGE FOR PRIVATE ROUTE
                localStorage.setItem('authorization', idToken);
                props.history.push('/dashboard');
              })
              .catch(err => {
                //Invalid token
                console.log('Invalid Token or DB currently down', err);
                setRequestError(err.response);
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
        //Remove token, firebase and id from local storage after sign out
        localStorage.removeItem('authorization');
        localStorage.removeItem('firebaseui::rememberedAccounts');
        localStorage.removeItem('id');
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
