import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: 300
  }
}));

let ApplyFormBackground = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        Apply for this application
      </Typography>
      <Typography component="p"></Typography>
    </Paper>
  );
};

export default ApplyFormBackground;
