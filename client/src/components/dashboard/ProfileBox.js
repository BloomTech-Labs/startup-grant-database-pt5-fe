import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, CardContent, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C0F0F7",
    boxShadow: "none"
  },
  avatar: {
    width: "110px",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px"
  },
  image: {
    height: "80px",
    width: "80px"
  },
  name: {
    fontWeight: "bold"
  }
}));

const ProfileBox = props => {
  const classes = useStyles();

  const user = {
    name: "Claire Sinozich",
    company: "The Company",
    avatar: "/images/avatars/headshot.jpg"
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.avatar}>
          <Avatar src={user.avatar} className={classes.image} />
        </div>
        <Typography className={classes.name}>{user.name}</Typography>
        <Typography>{user.company}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileBox;
