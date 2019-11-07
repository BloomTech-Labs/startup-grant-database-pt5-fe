import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DashBoard from "./components/dashboard/DashBoard";
import Settings from "./components/dashboard/Settings";
// import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hello world</h1>
      {/* protected routes */}
      <Route path="/settings" component={Settings} />
      <PrivateRoute path="/dashboard" component={DashBoard} />

      {/*Exeception trigger*/} 
      <button onClick={methodDoesNotExist}>Break the world</button>
    </div>
  );
}

export default App;
