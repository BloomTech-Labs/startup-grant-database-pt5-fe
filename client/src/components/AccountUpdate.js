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
  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

 

  //Handle submit 
 const handleSubmit = e => {
      e.preventDefault();
  }

  
  return (
   
    <form 
      {...rest} 
      className={classes.container} 
      noValidate 
      autoComplete="off" 
      component="div" 
      style={{ backgroundColor: '#cfe8fc'}}
      onsubmit= {this.handleSubmit}
      >

  <Typography 
    className={classes.title} 
    color="#000000" 
    fontWeight="fontWeightBold" 
    gutterBottom>
          Edit Profile Information 
    </Typography>

      <div>
        <TextField
          id="fullName"
          className={classes.textField}
          label="Full Name"
          margin="normal"
          variant="outlined"
          value={this.state.value} 
          onChange={this.handleChange} 
          
        />
      </div>
      <div>
        <TextField
          id="company"
          className={classes.textField}
          label="Company Name"
          margin="normal"
          variant="outlined"
          value={this.state.value} 
          onChange={this.handleChange} 
        />
      </div>
      <div>
        <TextField
          id="email"
          className={classes.textField}
          label="Email Address"
          margin="normal"
          variant="outlined"
          value={this.state.value} 
          onChange={this.handleChange} 
        />
      </div>
      <div>
        <TextField
          id="address"
          className={classes.textField}
          label="Address"
          margin="normal"
          variant="outlined"
          value={this.state.value} 
          onChange={this.handleChange} 
        />
      </div>
      <div>
        <TextField
          id="city"
          className={classes.textField}
          label="City"
          margin="normal"
          variant="outlined"
          value={this.state.value} 
          onChange={this.handleChange} 
        />
      </div>
      <div>
        <TextField
          id="state"
          className={classes.textField}
          label="State"
          margin="normal"
          variant="outlined"
          value={this.state.value} 
          onChange={this.handleChange} 
        />
      </div>
      <div>
      <Button 
            variant="contained" 
            className={classes.button}
            color = ""
            type="submit" value="Submit"
        >
        Update
        </Button>
      </div>   
    </form>
  );
}

export default ContactInfo;