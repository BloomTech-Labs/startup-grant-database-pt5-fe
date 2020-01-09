import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";

//import axios from 'axios';

//Need logic for adding totals
//Need endpoint to grab grant totals given to each user

const useStyles = makeStyles(theme => ({
  container: {
    height: "10%",
    width: "20%",
    backgroundColor: "#FFFFFF"
  },
  number: {
    fontSize: "15px"
  }
}));

const TotalAmountGiven = props => {
  const { className, ...rest } = props;

  //Add logic/endpoints
  const [totalAmountGiven, setTotalAmountGiven] = useState([]);

  //axios call

  //fix endpoint and setTotalAmountGiven

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_API}/api/grants/`)
  //     .then(res => {
  //       console.log(res);
  //       setAmountGiven(res.data);
  //     })
  //     .catch(err => {
  //       console.error(err.message);
  //     })
  // }, [])

  const classes = useStyles();

  // if ((totalAmountGiven = undefined)) {
  //   return <h1>Loading...</h1>;
  // } else {
  return (
    <Container className={classes.container}>
      <h2>Total Applications Submitted</h2>
      <div>
        <img src="images/icons/DollarSign.svg" alt="dollar sign icon" />
        <h2 className={classes.number}>You haven't given out any grants!</h2>
      </div>
    </Container>
  );
};
// };

export default TotalAmountGiven;
