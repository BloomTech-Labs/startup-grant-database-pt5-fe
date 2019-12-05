import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, CardContent, Typography, Avatar } from "@material-ui/core";

import axios from "axios";

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

  const [values, setValues] = useState([]);

  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetchAll = async () => {
      const userResult = await axios(
        "https://startup-grant-database-staging.herokuapp.com/api/users/${id}"
      );
      setValues(userResult.data.accountData);
    };
    fetchAll();
  });

  const user = values[0];

  // const user = {
  //   name: "Claire Sinozich",
  //   company: "The Company",
  //   avatar: "/images/avatars/headshot.jpg"
  // };

  if (user === undefined) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Card className={classes.root}>
        <CardContent>
          <div className={classes.avatar}>
            <Avatar src={user.avatar} className={classes.image} />
          </div>
          <Typography className={classes.name}>
            {user.first_name} {user.last_name}
          </Typography>
          <Typography>{user.organization_name}</Typography>
        </CardContent>
      </Card>
    );
  }
};

export default ProfileBox;
