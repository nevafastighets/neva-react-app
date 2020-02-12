import React from "react";
import SolidHero from "../components/SolidHero";
import Banner from "../components/Banner";
import PropertiesContainer from "../components/PropertiesContainer";
import { Layout } from "../components/Layout";
import styled from "styled-components";

import { Navigationbar } from "../components/Navigationbar";
import Footer from "../components/Footer";

const BannerMargin = styled.div`
  margin-top: 6rem;
`;

const OurProperty = () => {
  return (
    <React.Fragment>
      <Navigationbar />
      <SolidHero height="31" color="#313E5D">
        <BannerMargin>
          <Banner title="Våra Fastigheter" />
        </BannerMargin>
      </SolidHero>
      <Layout>
        <PropertiesContainer />
      </Layout>
      <Footer />
    </React.Fragment>
  );
};

export default OurProperty;
