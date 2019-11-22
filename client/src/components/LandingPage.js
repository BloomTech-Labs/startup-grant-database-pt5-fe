import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

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
    width: "51%",
    maxHeight: "200px"
  },
  bannerImg: {
    width: "20%",
    height: "inherit"
  },
  img: {
    // cannot use 'inherit' value for some reason. 100% of the parent div resolves
    // the height issue
    height: "100%"
  },
  bannerText: {
    width: "80%",
    height: "inherit",
    marginBottom: "3%"
  },
  cardsContainer: {
    display: "flex",
    flexFlow: "row wrap",
    width: "100%",
    // maxHeight: "10px",
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
  subtitle: {
    width: "100%"
  },
  stepsContainer: {
    width: "51%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space between",
    margin: "auto",
    backgroundColor: "white"
  },
  stepsImgContainer: {
    display: "flex",
    flexFlow: "row wrap",
    width: "35%",
    height: "inherit"
  },
  stepsImg: {
    height: "100%",
    width: "100%"
  },
  listSteps: {
    display: "flex",
    flexFlow: "row wrap",
    width: "64%"
    // justifyContent: "center"
  },
  step: {
    width: "100%"
  },
  link: {
    textDecoration: "none",
    textDecorationLine: "underline",
    padding: "1.5% 2.5% 1.5% 2.5%",
    color: "white",
    backgroundColor: "#00A8A8"
  }
}));
// style={classes.paperContainer}

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <Box className={classes.banner}>
        {/* IMAGE BELOW */}
        <Box className={classes.bannerImg}>
          <img
            alt="logo"
            src="/images/logo/grantlifyLogo.png"
            className={classes.img}
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
        <Box className={classes.stepsContainer}>
          <h3 className={classes.subtitle}>How It Works</h3>
          <Box className={classes.stepsImgContainer}>
            <img
              alt="steps"
              src="/images/logo/grantlifySteps.png"
              className={classes.stepsImg}
            />
          </Box>
          <Box className={classes.listSteps}>
            <Box className={classes.step}>
              <p>step one</p>
            </Box>
            <Box className={classes.step}>
              <p>step two</p>
            </Box>
            <Box className={classes.step}>
              <p>step three</p>
            </Box>
            <Box className={classes.step}>
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
