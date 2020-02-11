import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Layout } from "../components/Layout";
import Title from "../components/Title";
import styled from "styled-components";

import { withPageConsumer } from "../PageContext";
import Preloader from "../components/Preloader";

import { Navigationbar } from "../components/Navigationbar";
import Footer from "../components/Footer";

const BannerMargin = styled.div`
  margin-top: 6rem;
`;

function AboutUs({ context }) {
  const { loading, aboutuspage } = context;
  if (loading) {
    return <Preloader />;
  }

  return (
    <React.Fragment>
      <Navigationbar />
      <Hero height="31" img={aboutuspage.headerImage}>
        <div className="overlay"></div>
        <BannerMargin>
          <Banner
            title={aboutuspage.headerTitle}
            subtitle={aboutuspage.headerSubtitle}
          />
        </BannerMargin>
      </Hero>
      <Layout>
        <Title className="text-left" title={aboutuspage.contentTitle} />
        <p>{aboutuspage.pageText}</p>
      </Layout>
      <Footer />
    </React.Fragment>
  );
}

export default withPageConsumer(AboutUs);
