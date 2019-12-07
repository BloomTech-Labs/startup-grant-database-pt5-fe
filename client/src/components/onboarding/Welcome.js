import React from 'react';
import {
  Paper,
  Button,
  Input,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import '../onboarding/onboarding.css';
import { useForm } from './useInput';
import axios from 'axios';

//TODO:
// 1. Fix styling [x]
// 2. If Grant provider is selected Request some info
// 3.Pass data to server

const InitialSignupForm = props => {
  //Call back for form submit must be declare before the custom hook
  const submitCallBack = values => {
    //Api call logic to send or use the form data being submited
    // console.log('Submit clicked!', values);
    //get user ID to pass in the URL
    const userId = localStorage.getItem('id');
    props.history.push('/Choose_Tags');
    axios
      .put(`${process.env.REACT_APP_API}/api/users/${userId}`, values)
      .then(res => {
        console.log('Success!', res);
      })
      .catch(err => {
        //Invalid token or connection issue
        console.log('Error', err);
      });
  };

  //Custom hook
  const [values, handleChanges, handleSubmit] = useForm(
    {
      user_type: '',
      telephone: '',
      department: '',
      organization_name: '',
      address_one: '',
      address_two: '',
      zip_code: ''
    },
    submitCallBack
  );

  return (
    <Paper className="container">
      <div className="welcome-box">
        <h1>Welcome to Grantlify!</h1>
        <p>Please complete registration.</p>
        <form className="form-welcome">
          <FormControl className="drop-down">
            <InputLabel id="demo-simple-select-label">
              Please select user type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values.user_type}
              onChange={handleChanges}
              name="user_type"
            >
              <MenuItem value="0">Applicant</MenuItem>
              <MenuItem value="1">Grant Provider</MenuItem>
            </Select>
          </FormControl>
          <Input
            placeholder="Organization"
            type="text"
            value={values.organization_name}
            onChange={handleChanges}
            className="input-field"
            name="organization_name"
          />
          <Input
            placeholder="Department"
            type="text"
            value={values.department}
            onChange={handleChanges}
            className="input-field"
            name="department"
          />
          <Input
            placeholder="Phone"
            type="number"
            value={values.telephone}
            onChange={handleChanges}
            className="input-field"
            name="telephone"
          />
          <Input
            placeholder="Address"
            type="text"
            value={values.address_one}
            onChange={handleChanges}
            className="input-field"
            name="address_one"
          />
          <Input
            placeholder="Apt (optional)"
            type="text"
            value={values.address_two}
            onChange={handleChanges}
            className="input-field"
            name="address_two"
          />
          <Input
            placeholder="Zip Code"
            type="zip"
            value={values.zip_code}
            onChange={handleChanges}
            className="input-field"
            name="zip_code"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Next
          </Button>
        </form>
      </div>
    </Paper>
  );
};

export default InitialSignupForm;
