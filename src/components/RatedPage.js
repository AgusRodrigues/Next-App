import CardsContainer from "@/containers/CardsContainer";
import React from "react";
import Navbar from "./Navbar";

const RatedPage = () => {
  return (
    <>
    <h1 className="text-6xl flex p-5 justify-center">Top Rated</h1>
      <Navbar />
      <CardsContainer />
    </>
  );
};

export default RatedPage;
