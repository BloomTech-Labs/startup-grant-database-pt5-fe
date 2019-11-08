import React, { useState, useEffect } from 'react';
// import Button from "@material-ui/core/Button";
// import SideBar from './SideBar';

//Import firebase
const firebase = require('firebase/app');
require('firebase/auth');

const DashBoard = props => {
  //setting state for displaying username and loading
  const [currentUser, setCurrentUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // console.log('User data: ', user);
        setCurrentUser(user.displayName);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Welcome {currentUser}!</h1>
          {/* <SideBar /> */}
        </div>
      )}
    </div>
  );
};

export default DashBoard;
