import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Grid,
  Button,
  } from '@material-ui/core'
 

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(3),
  },
  input: {
    display: 'none',
  },
  avatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div>
                <Grid container justify="center" alignItems="center">
                <Avatar alt="Remy Sharp" src="" className={classes.Avatar} />
                 
               

    
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file" >
        <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
      </Grid>  
    </div>
  );
}
