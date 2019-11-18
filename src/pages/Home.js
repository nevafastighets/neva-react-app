import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import headerImage from "../assets/home.png";
import CitiesContainer from "../components/CitiesContainer";

export default function Home() {
  return (
    <React.Fragment>
      <Hero img={headerImage}>
        <Banner title="Vi förverkligar ditt hem" />
      </Hero>
      <CitiesContainer />
    </React.Fragment>
  );
}
