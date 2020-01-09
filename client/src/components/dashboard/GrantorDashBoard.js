import React, { useState } from "react";
import GrantorSideBar from "./GrantorSideBar";
import Saved from "./Saved";
import New from "./New";
import TotalAmountGiven from "./TotalAmountGiven";
import TotalReceived from "./TotalReceived";
import { makeStyles } from "@material-ui/core/styles";

//Import firebase
const firebase = require("firebase/app");
require("firebase/auth");

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "82vh"
  },
  welcome: {
    paddingLeft: "10vw"
  }
}));

const GrantorDashBoard = props => {
  //setting state for displaying username and loading
  const [currentUser, setCurrentUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setCurrentUser(user.displayName);
      setIsLoading(false);
    }
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {isLoading ? (
        <h1 className={classes.welcome}>Loading...</h1>
      ) : (
        <div>
          <h1 className={classes.welcome}>Welcome {currentUser}!</h1>
          <GrantorSideBar />
          <div
            style={{
              display: "flex",
              width: "80%",
              marginLeft: "20%",
              height: "100%"
            }}
          >
            <Saved />
            <New />
            <TotalReceived />
            <TotalAmountGiven />
          </div>
        </div>
      )}
    </div>
  );
};

export default GrantorDashBoard;
