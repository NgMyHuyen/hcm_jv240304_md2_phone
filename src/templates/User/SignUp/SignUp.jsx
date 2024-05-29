import React, { useState } from "react";
import Header from "../../../organism/Header/Header";
import "./signUp.scss";
export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("User Name:", userName);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <Header />
      <div className="sign-up-form-container">
        <form onSubmit={handleSubmit} className="sign-up-form">
          <h2>Sign Up TINY</h2>
          <div className="form-group">
            <label htmlFor="userName">User's Name</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="sign-up-button">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
