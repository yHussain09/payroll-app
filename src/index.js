import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import NavigationSidebar from "./components/NavigationSidebar";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    {/* <Routes> */}
    {/* <Route exact path="/" element={Login}> */}
    {/* <Login /> */}
    {/* </Route> */}
    {/* <Route path="/dashboard" component={<Dashboard />} /> */}

    {/* <Route path="/register" component={Register} /> */}
    {/* <Route path="/register">
          <Register />
        </Route>
        <Route path="/notFound">
          <NotFound />
        </Route> */}
    {/* </Routes> */}
    {/* <Login /> */}
    {/* </BrowserRouter> */}
    {/* <App /> */}

    {/* <Register /> */}
    <Dashboard />
    {/* <ForgotPassword /> */}
  </React.StrictMode>
);
