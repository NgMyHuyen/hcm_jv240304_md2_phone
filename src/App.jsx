import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from "./Component/User/Login";
import SignUp from "./Component/User/SignUp";
import Home from "./Component/Home";
import AdminLogin from "./Component/forAdmin/AdminLogin";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
