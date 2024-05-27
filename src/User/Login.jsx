import React, { useState } from "react";
// import "./App.scss";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Username:", userName);
    console.log("Password:", password);
  };

  return (
    <div className="login-form-container">
      <div className="wrapper">
        <form onSubmit={handleSubmit} /*className="login-form"*/>
          <h2>Login TINY</h2>
          <div className="form-group">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <a href="#">Forgot password?</a>
          <div>
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
