import React from "react";
import Header from "./Header";
import DarkVariantExample from "../CarouselUser";
import Suggest from "./SuggestForUser";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />
      <DarkVariantExample />
      <Suggest />
      <Footer />
    </>
  );
}
