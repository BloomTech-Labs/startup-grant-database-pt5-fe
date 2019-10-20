import React from 'react';
//Import firebase for sign out button
const firebase = require('firebase');

const DashBoard = props => {
  console.log(firebase.auth());
  return (
    <div>
      <h1>You've been authenticated !</h1>
      <button
        onClick={e => {
          props.history.push('/login');
          firebase.auth().signOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default DashBoard;
