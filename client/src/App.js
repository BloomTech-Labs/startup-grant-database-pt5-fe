import React from "react";
import "./App.css";
// import "./components/search/search.css";
import TopBar from "./components/scafolding/topbar/topbar.js";
import PlayArea from "../src/components/scafolding/playarea/playarea.js";
// import DashBoard from "./components/dashboard/DashBoard";

// import UserList from './components/userList_test';
// import SearchHolder from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <TopBar style={{ zIndex: 10 }} />
      <PlayArea />
      {/* <UserList /> */}
    </div>
  );
}

export default App;
