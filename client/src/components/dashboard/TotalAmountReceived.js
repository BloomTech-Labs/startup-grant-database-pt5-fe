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

const TotalAmountReceived = props => {
  const { className, ...rest } = props;

  //Add logic/endpoints
  const [totalAmountReceived, setTotalAmountReceived] = useState([]);

  //axios call

  //fix endpoint and setTotalAmountReceived

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_API}/api/grants/`)
  //     .then(res => {
  //       console.log(res);
  //       setTotalAmountReceived(res.data);
  //     })
  //     .catch(err => {
  //       console.error(err.message);
  //     })
  // }, [])

  const classes = useStyles();

  // if ((totalAmountReceived = undefined)) {
  //   return <h1>Loading...</h1>;
  // } else {
  return (
    <Container className={classes.container}>
      <h2>Total Amount Received</h2>
      <div>
        <img src="images/icons/DollarSign.svg" alt="dollar sign icon" />
        <h2 className={classes.number}>You haven't received any grants!</h2>
      </div>
    </Container>
  );
};
// };

export default TotalAmountReceived;
