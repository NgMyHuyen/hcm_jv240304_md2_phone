import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/templates/User/Home";
import Login from "../src/templates/User/Login";
import SignUp from "../src/templates/User/SignUp";
import "./App.scss";
import AdminLogin from "./templates/Admin/AdminLogin/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* adminLogin -> sua lai: admin-login */}
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
