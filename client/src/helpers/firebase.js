const firebase = require('firebase');
const firebaseui = require('firebaseui');

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'startup-grant-database.firebaseapp.com',
  databaseURL: 'https://startup-grant-database.firebaseio.com',
  projectId: 'startup-grant-database',
  storageBucket: 'startup-grant-database.appspot.com',
  messagingSenderId: '340541938572',
  appId: '1:340541938572:web:f199cff64da00843b714a9',
  measurementId: 'G-7MW7HY093F'
};

// Initialize the FirebaseUI Widget using Firebase.
firebase.initializeApp(firebaseConfig);
var ui = new firebaseui.auth.AuthUI(firebase.auth());

//Specify the FirebaseUI configuration
//(providers supported and UI customizations as well as success callbacks, etc).
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};

//Render the FirebaseUI Auth interface:
// The start method will wait until the DOM is loaded.
function wrappedStart() {
  ui.start('#firebaseui-auth-container', uiConfig);
}

//Manage Users below after sign in/sign up
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log('Display name: ', user.displayName);
    console.log('Email: ', user.email);
    console.log('JW Token: ', user.ma);
    //set token to headers for backend to decode
    const token = user.ma;
    localStorage.setItem('authorization', token);
  } else {
    // No user is signed in.
    console.log('Please sign');
  }
});

export default wrappedStart;
