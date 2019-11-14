import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
}));

const BasicTextFields = event => {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          id="fullName"
          className={classes.textField}
          label="Full Name"
          margin="outlined"
        />
      </div>
      <div>
        <TextField
          id="company"
          className={classes.textField}
          label="Company Name"
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="email"
          className={classes.textField}
          label="Email Address"
          margin="normal"
          variant="outlined"
        />
      </div>
    </form>
  );
}