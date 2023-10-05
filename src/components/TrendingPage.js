import CardsContainer from "@/containers/CardsContainer"
import React from "react"
import Navbar from "./Navbar"

const TrendingPage = () => {
  return (
    <>
    <Navbar/>
    <h1 className="text-6xl flex p-5 justify-center">Top Trending</h1>
        <CardsContainer/>
    </>

  )
}

export default TrendingPage