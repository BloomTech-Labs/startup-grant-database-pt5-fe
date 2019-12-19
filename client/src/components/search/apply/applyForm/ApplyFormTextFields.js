import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import ApplySuccessModal from "../applyForm/ApplySuccessModal";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 400
    }
  }
}));

let ApplyFormTextFields = () => {
  const classes = useStyles();
  const [value, setValue] = useState([
    {
      question1: "",
      question2: "",
      question3: ""
    }
  ]);

  const handleChange = event => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    console.log("submitted!");
  };

  return (
    <div className="container2">
      <h1>Apply for this application</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <div>
          <h3>Why do you deserve this grant? </h3>
          <TextField
            id="outlined-textarea"
            value={value.question1}
            onChange={handleChange}
            name="question1"
            label=""
            placeholder=""
            multiline
            rows="3"
            variant="outlined"
          />
          <br></br>
          <h3>What would you do with the money?</h3>
          <TextField
            id="outlined-textarea"
            value={value.question2}
            onChange={handleChange}
            name="question2"
            label=""
            placeholder=""
            multiline
            rows="3"
            variant="outlined"
          />
          <br></br>
          <h3>Tell us more about your business</h3>
          <TextField
            id="outlined-textarea"
            value={value.question3}
            onChange={handleChange}
            name="question3"
            label=""
            placeholder=""
            multiline
            rows="3"
            variant="outlined"
          />
          <br></br>
          <br></br>
          <ApplySuccessModal />
        </div>
      </form>
    </div>
  );
};

export default ApplyFormTextFields;
