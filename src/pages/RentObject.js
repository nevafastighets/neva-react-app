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

function RentObject({ context }) {
  const { loading, rentobjectpage } = context;
  if (loading) {
    return <Preloader />;
  }

  const ReactMarkdown = require('react-markdown')

  return (
    <React.Fragment>
      <Navigationbar />
      <Hero height="31" img={rentobjectpage.headerImage}>
        <div className="overlay"></div>
        <BannerMargin>
          <Banner
            title={rentobjectpage.headerTitle}
            subtitle={rentobjectpage.headerSubtitle}
          />
        </BannerMargin>
      </Hero>
      <Layout>
        <Title className="text-left" title={rentobjectpage.contentTitle} />
        {/* <p>{rentobjectpage.pageText}</p> */}
        <ReactMarkdown source={rentobjectpage.pageText} />
      </Layout>
      <Footer />
    </React.Fragment>
  );
}

export default withPageConsumer(RentObject);
