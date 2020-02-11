import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import CitiesContainer from "../components/CitiesContainer";
import { Layout } from "../components/Layout";
import Title from "../components/Title";

import { withPageConsumer } from "../PageContext";
import Preloader from "../components/Preloader";

import { Navigationbar } from "../components/Navigationbar";
import Footer from "../components/Footer";

function Home({ context }) {
  const { loading, homepage } = context;
  if (loading) {
    return <Preloader />;
  }

  return (
    <React.Fragment>
      <Navigationbar />
      <Hero height="44" img={homepage.headerImage}>
        <div className="overlay"></div>
        <Banner title={homepage.headerTitle} />
      </Hero>
      <Layout>
        <Title title={homepage.contentTitle} />
        <p className="text-center">{homepage.contentText}</p>
      </Layout>
      <Layout>
        <Title title={homepage.titleCities} />
        <CitiesContainer />
      </Layout>
      <Footer />
    </React.Fragment>
  );
}

export default withPageConsumer(Home);
