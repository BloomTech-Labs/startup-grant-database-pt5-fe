import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  pageContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center"
  },
  anyContainer: {
    marginBottom: "3%",
    justifyContent: "center"
  },
  bannerContainer: {
    display: "flex",
    flexFlow: "row no wrap",
    justifyContent: "center",
    width: "100%"
  },
  banner: {
    display: "flex",
    flexFlow: "row no wrap"
  },
  cardsContainer: {
    display: "flex",
    flexFlow: "row wrap",
    width: "100%",
    justifyContent: "center"
  },
  card: {
    width: "51%",
    margin: "auto",
    // marginBottom: "3%",
    backgroundColor: "white"
  },
  link: {
    textDecoration: "none",
    textDecorationLine: "underline",
    padding: "1.5% 2.5% 1.5% 2.5%",
    color: "white",
    backgroundColor: "#00A8A8"
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div classname={classes.pageContainer}>
      <Box className={classes.bannerContainer}>
        <Box name="banner" classname={classes.banner}>
          <h2>Welcome to Grantlify!</h2>
          <p>We know how hard it is to get help for your startup.</p>
          <p>We're here to help.</p>
          <Link to="/search" className={classes.link}>
            Start Searching
          </Link>
        </Box>
      </Box>
      <Box
        name="cards-container"
        className={classes.cardsContainer && classes.anyContainer}
      >
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
          <Box className="list-steps">
            <Box className="step">
              <p>step one</p>
            </Box>
            <Box className="step">
              <p>step two</p>
            </Box>
            <Box className="step">
              <p>step three</p>
            </Box>
            <Box className="step">
              <p>step four</p>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box name="sign-up">
        <Link to="#" className={classes.link}>
          Sign Up!
        </Link>
      </Box>
    </div>
  );
};

export default LandingPage;
