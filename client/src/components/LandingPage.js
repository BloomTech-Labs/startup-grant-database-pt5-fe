import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@material-ui/core";

const LandingPage = () => {
  return (
    <Card>
      <CardContent>
        <Link to="/search">Get Granted</Link>
      </CardContent>
    </Card>
  );
};

export default LandingPage;
