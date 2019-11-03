import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DashBoard from "./components/dashboard/DashBoard";
// import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hello world</h1>
      {/* protected routes */}
      <Route path="/dashboard" component={DashBoard} />
    </div>
  );
}

export default App;
