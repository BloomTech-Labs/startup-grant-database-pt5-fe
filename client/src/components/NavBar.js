import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const firebase = require('firebase/app');
require('firebase/auth');

const NavBar = props => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setIsLogin(true);
      }
    });
  }, []);

  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/dashboard">DashBoard (Private)</Link>
      <br />
      {isLogin ? (
        <Button
          onClick={e => {
            firebase
              .auth()
              .signOut()
              .then(function() {
                // Sign-out successful.
                window.location.href = '/login';
              })
              .catch(error => {
                // An error happened.
                console.log('There was an issue while signing out!', error);
              });
          }}
        >
          Sign Out
        </Button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default NavBar;
