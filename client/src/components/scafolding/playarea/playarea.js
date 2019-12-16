import React from "react";
import { Route } from "react-router-dom";
import Login from "../../../Authentication/Login";
import Search from "./../../search/search.js";
import ResultCard from "./../../search/resultcard.js";
import DashBoard from "../../dashboard/DashBoard";
import GrantorDashBoard from "../../dashboard/GrantorDashBoard";
import LandingPage from "../../LandingPage";
import Settings from "../../dashboard/Settings";
import "./playarea.css";
import InitialSignupForm from "../../onboarding/Welcome";
import Choose_Tags from "../../onboarding/Choose_Tags";
import CategoryTags from "../../onboarding/CategoryTags";
import PrivateRoute from "../../PrivateRoute";

const PlayArea = () => {
  return (
    <div className="play-area">
      {/* ALL ROUTES */}
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/search" component={Search} />
      <Route path="/welcome" component={InitialSignupForm} />
      <Route path="/Choose_Tags" component={Choose_Tags} />
      <Route path="/category-tags" component={CategoryTags} />
      {/* Convert to Protected!!! */}
      <Route path="/grantordashboard" component={GrantorDashBoard} />

      {/* PROTECTED ROUTES */}
      <PrivateRoute path="/settings" component={Settings} />
      <PrivateRoute path="/dashboard" component={DashBoard} />
    </div>
  );
};
export default PlayArea;
