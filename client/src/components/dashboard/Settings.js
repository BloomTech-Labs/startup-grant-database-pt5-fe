import React from "react";
import SideBar from "./SideBar";
import AccountDetails from "./AccountDetails";
import Profile from "./Profile";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {},
  div: {
    display: "flex",
    justifyContent: "space-around"
  }
}));

const Settings = props => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <SideBar />
      <Profile />
      <AccountDetails />
    </div>
  );
};

export default Settings;
