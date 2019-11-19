import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import headerImage from "../assets/defaultBcg.jpg";
import CitiesContainer from "../components/CitiesContainer";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <React.Fragment>
      <Hero img={headerImage}>
        <div className="overlay"></div>
        <Banner title="Vi förverkligar ditt hem" />
      </Hero>
      <Layout>
        <CitiesContainer />
      </Layout>
    </React.Fragment>
  );
}
