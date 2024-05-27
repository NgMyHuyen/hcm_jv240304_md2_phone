import React, { useState } from "react";
import "./App.scss";
import Header from "./Header";
import Footer from "./Footer";
// import DarkVariantExample from "./Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Suggest from "./SuggestForUser";
// import MainAdmin from "./forAdmin/MainPageAdmin";
// import Login from "./forUser/Login";
// import SignUp from "./forUser/SignUp";
// import Detail from "./forUser/ProductDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        {/* <DarkVariantExample />*/}
        <Suggest />
        <Footer />
        {/* <MainAdmin /> */}
        {/* <Login /> */}
        {/* <SignUp /> */}
        {/* <Detail /> */}
      </div>
    </>
  );
}

export default App;
