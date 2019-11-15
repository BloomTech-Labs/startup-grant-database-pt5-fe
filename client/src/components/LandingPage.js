import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  cardContainer: {
    display: "flex",
    flexFlow: "row wrap"
  },
  card: {
    width: "32%",
    margin: "0 auto"
  },
  cardDetails: {
    border: "1px solid dark blue"
  },
  linkStyling: {
    textDecoration: "none"
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div classname={classes.cardContainer}>
      <Card className={classes.card}>
        <CardContent classname={classes.cardDetails}>
          <Link to="/search" className={classes.linkStyling}>
            Get Granted
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default LandingPage;
