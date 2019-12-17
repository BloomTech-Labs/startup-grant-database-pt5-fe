import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";

import axios from "axios";

import SavedCard from "./SavedCard";

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
    color: "#000000"
  }
}));

const Saved = props => {
  const { className } = props;

  const id = localStorage.getItem("id");

  const [savedGrants, setSavedGrants] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/api/users/${id}`)
      .then(res => {
        console.log(res);
        setSavedGrants(res.data.pinnedGrants);
      })
      .catch(err => {
        console.error(err.message);
      });

  }, []);

  console.log("savedgrants", savedGrants);

  const classes = useStyles();

  if (savedGrants == undefined) {
    return <h1>Loading...</h1>;
  } else if (savedGrants.length === 0) {
    return (
      <Container>
        <h2>Saved Grants</h2>
        <h3>You don't have any saved grants!</h3>
      </Container>
    );
  } else {
    return (
      <Container>
        <h2>Saved Grants</h2>
        {savedGrants.slice(0, 4).map(items => {
          return (
            <Link className={classes.link} to={`/search/${items.id}`}>
              <SavedCard key={items.id} grant={items} />
            </Link>
          );
        })}
      </Container>
    );
  }
};

export default Saved;
