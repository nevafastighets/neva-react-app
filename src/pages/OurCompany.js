import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import headerImage from "../assets/ourcompany.jpg";
import CompaniesContainer from "../components/CompaniesContainer";
import { CompanyProvider } from "../CompanyContext";
import { Layout } from "../components/Layout";
import { Title } from "../components/Title";

export default function Home() {
  return (
    <React.Fragment>
      <CompanyProvider>
        <Hero img={headerImage}>
          <div className="overlay"></div>
          <Banner title="Våra bolag" subtitle="Vi är moderbolaget." />
        </Hero>
        <Layout>
          <Title title="Vi är ett växande företag." />
          <CompaniesContainer />
        </Layout>
      </CompanyProvider>
    </React.Fragment>
  );
}
