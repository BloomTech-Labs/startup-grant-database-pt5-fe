import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  cardContainer: {
    display: "flex",
    flexFlow: "row no wrap"
  },
  card: {
    width: "32%",
    margin: "0 0 3% 0"
    // marginBottom: "3%"
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
    <div>
      {/* added an extra div below to test spacing */}
      <div classname={classes.cardContainer}>
        <Card className={classes.card}>
          <CardContent classname={classes.cardDetails}>
            <h3>Welcome to Grantlify!</h3>
          </CardContent>
        </Card>
        {/*  */}
        <Card className={classes.card}>
          <CardContent classname={classes.cardDetails}>
            <h3>Our Goal</h3>
            <p>
              Hundreds and thousands of dollars worth of unused grant money is
              thrown away annually. Our Goal is to take all of the grants that
              are somehow overlooked and put them in one central location... for
              you.
            </p>
          </CardContent>
        </Card>
        {/*  */}
        <Card className={classes.card}>
          <CardContent classname={classes.cardDetails}>
            <h3>How It Works</h3>
            <p></p>
          </CardContent>
        </Card>
        {/*  */}
        <Card className={classes.card}>
          <CardContent classname={classes.cardDetails}>
            <h3>Finding Your Grants</h3>
            <p></p>
          </CardContent>
        </Card>
        {/*  */}
        <Card className={classes.card}>
          <CardContent classname={classes.cardDetails}>
            <h3>What's the Catch?</h3>
            <p></p>
          </CardContent>
        </Card>
        {/*  */}
        <Card className={classes.card}>
          <CardContent classname={classes.cardDetails}>
            <p>If you like what you see...</p>
            <Link to="/search" className={classes.linkStyling}>
              Get Granted
            </Link>
          </CardContent>
        </Card>
        {/*  */}

        {/*  */}
      </div>
    </div>
  );
};

export default LandingPage;
