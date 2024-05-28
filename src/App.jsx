import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import Footer from "./Footer";
// import DarkVariantExample from "./Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Suggest from "./SuggestForUser";
// import MainAdmin from "./forAdmin/MainPageAdmin";
import Login from "./User/Login";
import SignUp from "./User/SignUp";
// import Detail from "./forUser/ProductDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Carousel />} />

        {/* <Route path="/admin" element={<MainAdmin />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <div>
        <Header />
        {/* <DarkVariantExample /> */}
        <Suggest />
        <Footer />
        {/* <MainAdmin /> */}
        <Login />
        <SignUp />
        {/* <Detail /> */}
      </div>
    </>
  );
}

export default App;
