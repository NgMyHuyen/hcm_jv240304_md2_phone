import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { authActions } from "../../../store/Slices/User.slice.js";
import "./login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const errorMessage = useSelector((state) => state.auth.errorMessage);

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    if (username === "admin" && password === "12345") {
      navigate("/adminweb");
    } else {
      // Dispatch the login action
      dispatch(authActions.login({ username, password }));

      // if (isAuthenticated) {
      //   navigate("/");
      // }
    }
  };

  return (
    <div className="login-form-container">
      <div className="wrapper">
        <h1>Login</h1>
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* {errorMessage && <p className="error">{errorMessage}</p>} */}

          <a href="#">Forgot password?</a>
          <div>
            <p>
              Don't have an account? <Link to={"/signup"}>Register</Link>
            </p>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
