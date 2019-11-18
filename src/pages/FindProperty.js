import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import headerImage from "../assets/blue.png";
import PropertiesContainer from "../components/PropertiesContainer";

const FindProperty = () => {
  return (
    <React.Fragment>
      <Hero img={headerImage}>
        <Banner title="Hitta bostad" />
      </Hero>
      <PropertiesContainer />
    </React.Fragment>
  );
};

export default FindProperty;
