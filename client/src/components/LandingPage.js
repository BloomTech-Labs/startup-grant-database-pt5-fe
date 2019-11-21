import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// import grantlifyLogo from "../../public/images/logo/grantlifyLogo.png";

const useStyles = makeStyles(() => ({
  // pageContainer: {
  //   display: "flex",
  //   flexFlow: "row wrap",
  //   justifyContent: "center"
  // },
  anyContainer: {
    marginBottom: "3%",
    justifyContent: "center"
  },
  banner: {
    display: "flex",
    flexFlow: "row no wrap",
    justifyContent: "center",
    margin: "auto",
    width: "51%"
  },
  bannerImg: {
    width: "20%"
  },
  bannerText: {
    width: "80%",
    marginBottom: "3%"
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
    marginBottom: "2%",
    boxSizing: "border-box",
    padding: "1.5%",
    backgroundColor: "white"
  },
  cardDetails: {
    padding: "3.5%"
  },
  step: {},
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
    <div className={classes.pageContainer}>
      <Box className={classes.banner}>
        {/* IMAGE BELOW */}
        <Box className={classes.bannerImg}>
          <img
            alt="logo"
            src="../../public/images/logo/grantlifyLogo.png"
          ></img>
        </Box>
        {/* IMAGE ABOVE */}
        <Box className={classes.bannerText}>
          <h2>Welcome to Grantlify!</h2>
          <p>We know how hard it is to get help for your startup.</p>
          <p>We're here to help.</p>
        </Box>

        <Link to="/search" className={classes.link}>
          Start Searching
        </Link>
      </Box>

      <Box className={classes.cardsContainer && classes.anyContainer}>
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
