import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Container, Card } from "@material-ui/core";

import NewCard from "./NewCard";

const useStyles = makeStyles(() => ({}));

const New = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const grant = [
    {
      id: 1,
      name: "This is the name of a grant",
      duedate: "10/23/17",
      amount: "5000"
    },
    {
      id: 2,
      name: "this is grant #2",
      duedate: "10/11/11",
      amount: "6345"
    }
  ];

  return (
    <Container style={{ backgroundColor: "#F0FDFE", height: "100%" }}>
      <h2>New Grants for You</h2>
      {grant.map(items => {
        return (
          <Link
            style={{ textDecoration: "none", color: "#000000" }}
            to={`/search/${items.id}`}
          >
            <NewCard key={items.id} grant={items} />
          </Link>
        );
      })}
    </Container>
  );
};

export default New;
