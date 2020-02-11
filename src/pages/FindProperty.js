import React from "react";
import SolidHero from "../components/SolidHero";
import Banner from "../components/Banner";
import PropertiesContainer from "../components/PropertiesContainer";
import { Layout } from "../components/Layout";

import { Navigationbar } from "../components/Navigationbar";
import Footer from "../components/Footer";

const FindProperty = () => {
  return (
    <React.Fragment>
      <Navigationbar />
      <SolidHero color="#313E5D">
        <Banner title="Hitta bostad" />
      </SolidHero>
      <Layout>
        <PropertiesContainer />
      </Layout>
      <Footer />
    </React.Fragment>
  );
};

export default FindProperty;
