import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    if (inputs.email === "admin" && inputs.password === "admin") {
      navigate("/");
    }
  };

  return (
    <div className="container">
      {/* <!-- Outer Row --> */}
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form
                      id="contact-form"
                      className="user"
                      onSubmit={handleSubmit}
                    >
                      <div className="form-group">
                        <input
                          type="text"
                          name="email"
                          value={inputs.email || ""}
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          value={inputs.password || ""}
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <button
                        className="btn btn-primary btn-user btn-block"
                        type="submit"
                        // onClick={() => {
                        //   navigate("/");
                        // }}
                      >
                        Login
                      </button>
                      {/* <hr /> */}
                    </form>

                    <hr />
                    <div className="text-center">
                      <a
                        className="small"
                        onClick={() => {
                          navigate("/forgotPassword");
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <a
                        className="small"
                        onClick={() => {
                          navigate("/register");
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        Create an Account!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
