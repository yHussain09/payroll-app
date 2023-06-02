import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Navbar from "./components/nav-bar";
import Sidebar from "./components/side-bar";
import MainContainer from "./components/main-container";

function App() {
  return (
    <>
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <MainContainer />
        </div>
      </div>
    </>
  );
}

export default App;
