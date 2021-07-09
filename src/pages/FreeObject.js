import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import CompaniesContainer from "../components/CompaniesContainer";
import { CompanyProvider } from "../CompanyContext";
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

function FreeObject({ context }) {
  const { loading, ourcompanypage } = context;
  if (loading) {
    return <Preloader />;
  }

  return (
    <React.Fragment>
      <CompanyProvider>
        <Navigationbar />
        <Hero height="31" img={ourcompanypage.headerImage}>
          <div className="overlay"></div>
          <BannerMargin>
            <Banner
              title={ourcompanypage.headerTitle}
              subtitle={ourcompanypage.headerSubtitle}
            />
          </BannerMargin>
        </Hero>
        <Layout>
          <Title title={ourcompanypage.contentTitle} />
          <CompaniesContainer />
        </Layout>
        <Footer />
      </CompanyProvider>
    </React.Fragment>
  );
}

export default withPageConsumer(FreeObject);
