import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core';

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


const ContactInfo = event => {
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
      <div>
        <TextField
          id="address"
          className={classes.textField}
          label="Address"
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="city"
          className={classes.textField}
          label="City"
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="state"
          className={classes.textField}
          label="State"
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
      <Button 
            variant="contained" 
            className={classes.button}
            color = ""
        >
        Update
        </Button>
      </div>
   
    </form>
  );
}

export default ContactInfo;