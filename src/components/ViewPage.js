import CardsContainer from "@/containers/CardsContainer";
import React from "react";
import Navbar from "./Navbar";

const ViewPage = () => {
  return (
    <>
    <h1 className="text-6xl flex p-5 justify-center">Top Views</h1>
      <Navbar />
      <CardsContainer />
    </>
  );
};

export default ViewPage;
