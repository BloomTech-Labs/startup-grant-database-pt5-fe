import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Container, Card } from "@material-ui/core";

import SavedCard from "./SavedCard";

const useStyles = makeStyles(() => ({}));

const Saved = props => {
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
    <Container>
      {grant.map(items => {
        return (
          <Link
            style={{ textDecoration: "none", color: "#000000" }}
            to={`/search/${items.id}`}
          >
            <SavedCard key={items.id} grant={items} />
          </Link>
        );
      })}
    </Container>
  );
};

export default Saved;
