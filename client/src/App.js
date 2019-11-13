import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Login from "./Authentication/Login";
import DashBoard from "./components/DashBoard";
import PrivateRoute from "./components/PrivateRoute";
import UserList from "./components/userList_test";
import InitialSignupForm from "./components/onboarding/InitialSignupForm.js";
import Choose_Tags from "./components/onboarding/Choose_Tags";

function App() {
  return (
    <div className="App">
      {/* <Link to="/">Home</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/dashboard">DashBoard (Private)</Link>
      <br />
      <h1>Hello world</h1>
      <Route path="/login" component={Login} /> */}
      {/* <Link to="/users">Users</Link> */}
      {/* protected routes */}
      <PrivateRoute path="/dashboard" component={DashBoard} />

      <Route path="/users" component={UserList} />
      <Route path="/welcome" component={InitialSignupForm} />
      <Route path="/choose_tags" component={Choose_Tags} />
    </div>
  );
}

export default App;
