const firebase = require('firebase');
const firebaseui = require('firebaseui');

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'startup-grant-database.firebaseapp.com',
  databaseURL: 'https://startup-grant-database.firebaseio.com',
  projectId: 'startup-grant-database',
  storageBucket: 'startup-grant-database.appspot.com',
  messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
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
  signInSuccessUrl: '/dashboard',
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

//Manage Users below after sign in/sign up but it was moved to the
//login component to send the request to api using hooks
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    //Get token to pass to headers for PrivateRoute to authenticate user
    console.log('You are currently logged in!');
    user.getIdToken().then(token => {
      //   console.log(token);
      localStorage.setItem('authorization', token);
    });
  } else {
    // No user is signed in.
    console.log('You are currently logged out');

    localStorage.removeItem('authorization');
  }
});

export default wrappedStart;
