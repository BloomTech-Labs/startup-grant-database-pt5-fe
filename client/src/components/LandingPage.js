import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  pageContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly"
  },
  bannerContainer: {
    display: "flex",
    flexFlow: "row no wrap",
    justifyContent: "space-evenly",
    width: "100%"
  },
  banner: {
    display: "flex",
    flexFlow: "row no wrap",
    marginLeft: "20%"
  },
  cardsContainer: {
    display: "flex",
    flexFlow: "row wrap",
    width: "100%",
    justifyContent: "center"
  },
  card: {
    width: "51%",
    marginBottom: "3%"
  },
  cardDetails: {},
  linkStyling: {
    textDecoration: "none"
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div name="main-container" classname={classes.pageContainer}>
      <Box className={classes.bannerContainer}>
        <Box name="banner" classname={classes.banner}>
          <h2>Welcome to Grantlify!</h2>
          <p>We know how hard it is to get help for your startup.</p>
          <p>We're here to help.</p>
        </Box>
      </Box>
      <Box name="cards-container" className={classes.cardsContainer}>
        <Box className={classes.card}>
          <h3>Our Goal</h3>
          <p>
            Hundreds and thousands of dollars worth of unused grant money is
            thrown away annually. Our Goal is to take all of the grants that are
            somehow overlooked and put them in one central location... for you.
          </p>
        </Box>
        <Box className={classes.card}>
          <h3>How It Works</h3>
          <ul name="list-steps">
            <li name="step-1">step one</li>
            <li name="step-2">step two</li>
            <li name="step-3">step three</li>
            <li name="step-4">step four</li>
          </ul>
        </Box>
      </Box>
      <Box name="sign-up">
        <Link to="#">Sign Up!</Link>
      </Box>
    </div>
  );
};

export default LandingPage;
