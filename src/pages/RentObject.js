import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import headerImage from "../assets/rentobject.jpg";
import { Layout } from "../components/Layout";
import Title from "../components/Title";
import styled from "styled-components";

const BannerMargin = styled.div`
  margin-top: 6rem;
`;

export default function RentObject() {
  return (
    <React.Fragment>
      <Hero height="31" img={headerImage}>
        <div className="overlay"></div>
        <BannerMargin>
          <Banner
            title="Hyresobjekt"
            subtitle="Här har vi samlat all information"
          />
        </BannerMargin>
      </Hero>
      <Layout>
        <Title className="text-left" title="Hyresobjekt" />
      </Layout>
    </React.Fragment>
  );
}
