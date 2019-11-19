import React from "react";
import { Link } from "react-router-dom";
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
    <div name="main-container" classname={classes.cardContainer}>
      <div name="banner-container" className={classes.card}>
        <div name="banner" classname={classes.cardDetails}>
          <h2>Welcome to Grantlify!</h2>
        </div>
      </div>
      {/*  */}
      <div name="body-container" className={classes.card}>
        <div name="company-goal-container" classname={classes.cardDetails}>
          <h3>Our Goal</h3>
          <p>
            Hundreds and thousands of dollars worth of unused grant money is
            thrown away annually. Our Goal is to take all of the grants that are
            somehow overlooked and put them in one central location... for you.
          </p>
        </div>
        <div name="steps-container">
          <h3>How It Works</h3>
          <div name="list-steps">
            <div name="step-1">step one</div>
            <div name="step-2">step two</div>
            <div name="step-3">step three</div>
            <div name="step-4">step four</div>
          </div>
        </div>
      </div>
      <div name="sign-up">
        <Link to="/signup">Sign Up!</Link>
      </div>
    </div>
  );
};

export default LandingPage;
