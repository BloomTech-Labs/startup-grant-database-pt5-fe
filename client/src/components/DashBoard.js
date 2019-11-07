import React, { useState, useEffect } from 'react';

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
        console.log('User data: ', user);
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
          <button
            onClick={e => {
              firebase
                .auth()
                .signOut()
                .then(function() {
                  // Sign-out successful.
                  window.location.href = '/login';
                })
                .catch(function(error) {
                  // An error happened.
                  console.log('There was an issue while signing out!');
                });
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
