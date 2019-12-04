import React, { useState, useEffect } from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button
} from "@material-ui/core";

import axios from "axios";
// import DropZone from "./DropZone";

const useStyles = makeStyles(() => ({
  root: {},
  card: {
    width: "40%",
    margin: "0 2%",
    height: "30%"
  },
  details: {
    display: "flex"
  },
  avatar: {
    marginLeft: "auto",
    height: 100,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: "10px"
  },
  uploadButton: {
    marginRight: "10px"
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  }
}));

const AccountProfile = props => {
  const { className, files, ...rest } = props;

  const [values, setValues] = useState([]);

  useEffect(() => {
    axios
      .get("https://startup-grant-database.herokuapp.com/api/users/1")
      .then(res => {
        console.log(res);
        setValues(res.data);
      })
      .catch(err => {
        console.error(err.message);
      });
  });

  const classes = useStyles();

  // const user = {
  //   name: "Claire Sinozich",
  //   state: "Colorado",
  //   country: "USA",
  //   timezone: "GTM-7",
  //   avatar: "/images/avatars/headshot.jpg"
  // };

  return (
    <Card {...rest} className={(classes.root, classes.card)}>
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography gutterBottom variant="h2">
              {values.name}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {values.state}, {values.country}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              {moment().format("hh:mm A")}
            </Typography>
          </div>
          <Avatar className={classes.avatar} src={props.files} />
        </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button variant="text">Upload picture</Button>
        <Button variant="text">Remove picture</Button>
      </CardActions>
    </Card>
  );
};

export default AccountProfile;
