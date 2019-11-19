import React from "react";
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
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: "Claire Sinozich",
    state: "Colorado",
    country: "USA",
    timezone: "GTM-7",
    avatar: "/images/avatars/headshot.jpg"
  };

  return (
    <Card {...rest} className={(classes.root, classes.card)}>
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography gutterBottom variant="h2">
              {user.name}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {user.state}, {user.country}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              {moment().format("hh:mm A")} ({user.timezone})
            </Typography>
          </div>
          <Avatar className={classes.avatar} src={user.avatar} />
        </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button className={classes.uploadButton} variant="text">
          Upload picture
        </Button>
        <Button variant="text">Remove picture</Button>
      </CardActions>
    </Card>
  );
};

export default AccountProfile;
