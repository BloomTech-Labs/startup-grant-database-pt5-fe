import React, { useState } from 'react';

//Import firebase
const firebase = require('firebase/app');
require('firebase/auth');

const DashBoard = props => {
  //setting state for displaying username and loading
  const [currentUser, setCurrentUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setCurrentUser(user.displayName);
      setIsLoading(false);
    }
  });

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
                  props.history.push('/login');
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
