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

    //alternate code
    // const fetchAll = async () => {
    //   //Fetch
    //   const userResult = await axios(
    //     "https://startup-grant-database-staging.herokuapp.com/api/users/1"
    //   );
    //   setSavedGrants(userResult.data.pinnedGrants);
    // };
    // fetchAll();
  }, []);

  console.log("savedgrants", savedGrants);

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
