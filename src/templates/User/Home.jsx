import React from "react";
import Recommended from "../../molecules/Recommended/Recommended";
import Banner from "../../organism/Banner";
import Footer from "../../organism/Footer/Footer";
import Header from "../../organism/Header/Header";
import Suggest from "../../organism/Suggest/Suggest";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Suggest />
      <Recommended />
      <Footer />
    </>
  );
}
