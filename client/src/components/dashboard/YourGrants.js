import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";

import GrantCard from "./GrantCard";

//import axios from 'axios';

//need endpoint to grab grants by grantor

const useStyles = makeStyles(theme => ({
  container: {
    height: "35%",
    width: "20%",
    backgroundColor: "#FFFFFF"
  }
}));

const YourGrants = props => {
  const { className, ...rest } = props;

  //add endpoints
  const [yourGrants, setYourGrants] = useState([]);

  //fix endpoint and setYourGrants

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_API}/api/`)
  //   .then(res => {
  //     console.log(res);
  //     setYourGrants(res.data);
  //   })
  //   .catch(err => {
  //     console.error(err.message)
  //   })
  // }, [])

  const classes = useStyles();

  // if ((yourGrants === undefined)) {
  //   return <h1>Loading...</h1>;
  // } else if (yourGrants.length === 0) {
  //   return (
  //     <Container className={classes.container}>
  //       <h2>Your Grants</h2>
  //       <h3>You haven't added any grants!</h3>
  //     </Container>
  //   )
  // } else {
  return (
    <Container className={classes.container}>
      <h2>Your Grants</h2>
      {yourGrants.map(items => {
        return (
          <Link to={`/grants/${items.id}`}>
            <GrantCard key={items.id} grant={items} />
          </Link>
        );
      })}
    </Container>
  );
  // }
};
