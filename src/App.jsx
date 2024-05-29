import React from "react";
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CarouselUser from "./components/CarouselUser";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Suggest from "./components/SuggestForUser";
import "./App.scss";
import Login from "./User/Login";
import SignUp from "./User/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CarouselUser />} />

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
