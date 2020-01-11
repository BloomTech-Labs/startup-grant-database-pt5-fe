import React, { useState, useEffect } from "react";
import { Card } from "@material-ui/core";
import Moment from "react-moment";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

let AcceptOrDenyButton = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        {props.name}
      </Button>
    </div>
  );
};

const GrantCard = props => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/api/users/1`)
      .then(res => {
        setUser(res.data.accountData);
      })
      .catch(err => {
        console.error(err.message);
      });
  }, []);

  console.log(user);

  return (
    <Card style={{ margin: "30px" }}>
      <h1>{props.grant.grant_title}</h1>
      <h2>Company: {user.map(i => i.organization_name)}</h2>
      <h2>
        Name: {user.map(i => i.first_name)} {user.map(i => i.last_name)}
      </h2>
      <h3>The company's mission is: {props.grant.mission_statement}</h3>
      <h3>The company is worthy because:{props.grant.worthy_because}</h3>
      <h3>The applicants spending plans are: {props.grant.spending_plans}</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px"
        }}
      >
        <AcceptOrDenyButton name={"Accept"} />
        <AcceptOrDenyButton name={"Reject"} />
      </div>
    </Card>
  );
};

export default GrantCard;
