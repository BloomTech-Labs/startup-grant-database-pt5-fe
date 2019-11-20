import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
  TextField, 
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(1)
      },
      
}));


const ContactInfo = props => {
  //Styles
  const classes = useStyles();

  //Setting up state
  const { className, ...rest } = props;
  const [values, setValues] = React.useState();
  const [setSubmitting] = React.useState(false);
  

  //Form Changes
  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  //Handle submit 
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
  }


  
  return (
   
    <form {...rest} className={classes.container} noValidate autoComplete="off" component="div" style={{ backgroundColor: '#cfe8fc'}}>
       <Typography className={classes.title} color="#000000" fontWeight="fontWeightBold" gutterBottom>
          Edit Profile Information 
        </Typography>
      <div>
        <TextField
          id="fullName"
          className={classes.textField}
          label="Full Name"
          margin="normal"
          variant="outlined"
          handleChange = {handleChange}
          
        />
      </div>
      <div>
        <TextField
          id="company"
          className={classes.textField}
          label="Company Name"
          margin="normal"
          variant="outlined"
          handleChange = {handleChange}
        />
      </div>
      <div>
        <TextField
          id="email"
          className={classes.textField}
          label="Email Address"
          margin="normal"
          variant="outlined"
          handleChange = {handleChange}
        />
      </div>
      <div>
        <TextField
          id="address"
          className={classes.textField}
          label="Address"
          margin="normal"
          variant="outlined"
          handleChange = {handleChange}
        />
      </div>
      <div>
        <TextField
          id="city"
          className={classes.textField}
          label="City"
          margin="normal"
          variant="outlined"
          handleChange = {handleChange}
        />
      </div>
      <div>
        <TextField
          id="state"
          className={classes.textField}
          label="State"
          margin="normal"
          variant="outlined"
          handleChange = {handleChange}
        />
      </div>
      <div>
      <Button 
            variant="contained" 
            className={classes.button}
            color = ""
            handleSubmit={handleSubmit}
        >
        Update
        </Button>
      </div>   
    </form>
  );
}

export default ContactInfo;