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
  }
}));

const TotalReceived = props => {
  const { className, ...rest } = props;

  //Add logic/endpoints
  const [totalReceived, setTotalReceived] = useState([]);

  //axios call

  //fix endpoint and setTotalReceived

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_API}/api/grants/`)
  //     .then(res => {
  //       console.log(res);
  //       setTotalReceived(res.data);
  //     })
  //     .catch(err => {
  //       console.error(err.message);
  //     })
  // }, [])

  const classes = useStyles();

  // if ((totalReceived = undefined)) {
  //   return <h1>Loading...</h1>;
  // } else {
  return (
    <Container className={classes.container}>
      <h2>Total Applications Received</h2>
      <div>
        <img src="images/icons/ClipBoardCheck.svg" alt="clipboard icon" />
        <h2 className={classes.number}>
          You haven't received any applications!
        </h2>
      </div>
    </Container>
  );
};
// };

export default TotalReceived;
