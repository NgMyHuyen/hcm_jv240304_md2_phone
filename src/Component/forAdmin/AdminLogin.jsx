import React from "react";
import "./Admin.css";
import Header from "../Header";

const LoginAdmin = () => {
  const handleAdminSubmit = (event) => {
    event.preventDefault();
    // Add your form submit logic here
  };

  return (
    <>
      <Header />
      <div className="page-wrap">
        <div className="left-panel">
          <div className="illustration">
            {/* <img
            src="/images/illustration.png"
            alt="Illustration"
            className="image"
          /> */}
          </div>
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
              <a href="#" className="link">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginAdmin;
