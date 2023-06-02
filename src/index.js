import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import Dashboard from "./pages/Dashboard";
import PasswordRecoveryPage from "./pages/password-recovery-page";
import NotFound from "./pages/NotFound";
import NavigationSidebar from "./components/_NavigationSidebar";
import Footer from "./components/_Footer";
import Root from "./routes/root";
import ErrorPage from "./pages/error-page";
import Contact from "./routes/contact";
import EmployeePage from "./pages/employees-page";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "contacts/:contactId",
    //     element: <Contact />,
    //   },
    // ],
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/employees",
        element: <EmployeePage />,
      },
    ],
  },
  {
    path: "/passwordRecovery",
    element: <PasswordRecoveryPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
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
    {/* <Dashboard /> */}
    {/* <ForgotPassword /> */}
  </React.StrictMode>
);
