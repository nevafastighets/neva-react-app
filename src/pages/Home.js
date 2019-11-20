import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import headerImage from "../assets/defaultBcg.jpg";
import CitiesContainer from "../components/CitiesContainer";
import { Layout } from "../components/Layout";
import { Title } from "../components/Title";

export default function Home() {
  return (
    <React.Fragment>
      <Hero img={headerImage}>
        <div className="overlay"></div>
        <Banner title="Vi förverkligar ditt hem" />
      </Hero>
      <Layout>
        <Title title="Vi finns i flera orter." />
        <CitiesContainer />
      </Layout>
    </React.Fragment>
  );
}
