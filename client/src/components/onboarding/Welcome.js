import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Choose_Tags from './Choose_Tags';
import '../onboarding/onboarding.css';
import { Route, Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';


//TODO: 
// 1. Fix styling
// 2.Pass data to server



const SimpleSelect = () => {
  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    },
    menu: {
      width: 200
    }
  }));
  const userTypes = [
    {
      value: 'Grant_Receiver',
      label: 'I am looking for Grants'
    },
    {
      value: 'Grant_Giver',
      label: 'I am looking to provide money to startups'
    }
  ];

  const classes = useStyles();
  const [userType, setUserType] = useState('Grant_Receiver');

  const handleChange = event => {
    setUserType(event.target.value);
  };

  const handleSubmit = event => {
    console.log(userType);
    //post data to backend here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.container}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Select Your User Type"
          className={classes.textField}
          value={userType}
          onChange={handleChange}
          //helperText="Please select your currency"
          margin="normal"
        >
          {userTypes.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
};

// text field component

const Inputs = () => {
  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    input: {
      margin: theme.spacing(1)
    }
  }));

  const classes = useStyles();
  const [inputValue, setInputValue] = useState({
    companyName: ''
  });

  const onValueChange = event => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    });
    console.log(inputValue);
  };

  const onFormSubmit = event => {
    event.preventDefault();
  };
  return (
    <div>
      <div>
        <Input
          placeholder="Company Name"
          value={inputValue.companyName}
          onChange={onValueChange}
          className={classes.input}
          name="companyName"
        />
      </div>
    </div>
  );
};

// select state

const StateSelect = () => {
  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      alignContent: 'center'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    },
    menu: {
      width: 200
    }
  }));

  const states = [
    {
      value: 'NY',
      label: 'NY'
    },
    {
      value: 'NJ',
      label: 'NJ'
    },
    {
      value: 'CA',
      label: 'CA'
    },
    {
      value: 'UT',
      label: 'UT'
    }
  ];

  const classes = useStyles();
  const [userType, setUserType] = useState('NY');

  const handleChange = event => {
    event.preventDefault();
    setUserType(event.target.value);
    console.log(userType);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(userType);
    //post data to backend here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.container}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Select Your State"
          className={classes.textField}
          value={userType}
          onChange={handleChange}
          //helperText="Please select your currency"
          margin="normal"
        >
          {states.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
};

// main Component

const InitialSignupForm = props => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      padding: theme.spacing(0.5)
    },
    chip: {
      margin: theme.spacing(0.5)
    }
  }));

  return (
    <Paper className="container">
      <div className="welcome-box">
        <h1>Welcome to Grantlify!</h1>
        <p>
          Alredy have an account? Sign up <a href="#">here</a>
        </p>
        <form>
          <SimpleSelect />
          <br></br>
          <br></br>
          <Inputs /> <br></br>
          <br></br>
          <br></br>
          <StateSelect />
          <br></br>
          <br></br>
          <br></br>
          <Link to="/Choose_Tags">
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </Link>
          <Route path="/Choose_Tags" component={Choose_Tags} />
        </form>
      </div>
    </Paper>
  );
};

export default InitialSignupForm;
