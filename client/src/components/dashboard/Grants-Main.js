import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";

import GrantCard from "./GrantCard";

import axios from "axios";

//need endpoint to grab grants by grantor

const useStyles = makeStyles(theme => ({
  container: {
    height: "80%"
  }
}));

const GrantsMain = props => {
  const { className, ...rest } = props;

  //add endpoints
  const [grants, setGrants] = useState([]);

  //fix endpoint and setApplications

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/api/grants/:id`)
      .then(res => {
        console.log(res);
        setGrants(res.data);
      })
      .catch(err => {
        console.error(err.message);
      });
  }, []);

  const classes = useStyles();
  if (received === undefined) {
    return <h1>Loading...</h1>;
  } else if (received.length === 0) {
    return (
      <Container className={classes.container}>
        <h2>Your Grants</h2>
        <h3>You haven't created any!</h3>
      </Container>
    );
  } else {
    return (
      <Container className={classes.container}>
        <h2>Your Grants</h2>
        {applications.map(items => {
          return;
          <Link to={`/grants/${items.id}`}>
            <GrantCard key={items.id} grant={items} />
          </Link>;
        })}
      </Container>
    );
  }
};

export default GrantsMain;
