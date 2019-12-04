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

  const [savedGrants, setSavedGrants] = useState([]);

  useEffect(() => {
    axios
      .get("https://startup-grant-database.herokuapp.com/api/users/1")
      .then(res => {
        console.log(res);
        setSavedGrants(res.savedGrants.data);
      })
      .catch(err => {
        console.error(err.message);
      });
  });

  const classes = useStyles();

  // const grant = [
  //   {
  //     id: 1,
  //     name: "This is the name of a grant",
  //     duedate: "10/23/17",
  //     amount: "5000"
  //   },
  //   {
  //     id: 2,
  //     name: "this is grant #2",
  //     duedate: "10/11/11",
  //     amount: "6345"
  //   }
  // ];

  return (
    <Container>
      <h2>Saved Grants</h2>
      {savedGrants.map(items => {
        return (
          <Link className={classes.link} to={`/search/${items.id}`}>
            <SavedCard key={items.id} grant={items} />
          </Link>
        );
      })}
    </Container>
  );
};

export default Saved;
