import React, { useState } from "react";
import SideBar from "./SideBar";
import Saved from "./Saved";
import New from "./New";

//Import firebase
const firebase = require("firebase/app");
require("firebase/auth");

const DashBoard = props => {
  //setting state for displaying username and loading
  const [currentUser, setCurrentUser] = useState("");
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
        <div style={{ height: "100%" }}>
          <h1>Welcome {currentUser}!</h1>
          <SideBar />
          <div
            style={{
              display: "flex",
              width: "80%",
              marginLeft: "20%"
            }}
          >
            <Saved />
            <New />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
