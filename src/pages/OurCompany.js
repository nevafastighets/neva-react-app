import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import headerImage from "../assets/ourcompany.jpg";
import CompaniesContainer from "../components/CompaniesContainer";
import { CompanyProvider } from "../CompanyContext";
import { Layout } from "../components/Layout";
import Title from "../components/Title";
import styled from "styled-components";

const BannerMargin = styled.div`
  margin-top: 6rem;
`;

export default function OurCompany() {
  return (
    <React.Fragment>
      <CompanyProvider>
        <Hero height="31" img={headerImage}>
          <div className="overlay"></div>
          <BannerMargin>
            <Banner title="Våra bolag" subtitle="Vi är moderbolaget." />
          </BannerMargin>
        </Hero>
        <Layout>
          <Title title="Vi är ett växande företag." />
          <CompaniesContainer />
        </Layout>
      </CompanyProvider>
    </React.Fragment>
  );
}
