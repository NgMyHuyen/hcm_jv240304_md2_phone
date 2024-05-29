import React from "react";
import "./AdminLogin.scss";
import { Link } from "react-router-dom";
import Header from "../../organism/Header/Header";

const AdminLogin = () => {
  const handleAdminSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
      <div className="page-wrap">
        <div className="left-panel">
          <div className="illustration"></div>
          <h2>Welcome back to TINY</h2>
        </div>

        <div className="right-panel">
          <h1>
            Xin chào, <strong> Admin</strong>
          </h1>

          <form className="animated-form" onSubmit={handleAdminSubmit}>
            <h3>Login to your account</h3>

            <div className="form-group">
              <label htmlFor="userName">Username</label>
              <input type="text" id="userName" className="userName" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="password" />
            </div>

            <div className="form-group flex-end">
              <button className="button" type="submit">
                LOGIN
              </button>
            </div>

            <div className="lost-password">
              <Link to="/" className="link">
                Forgot your password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
