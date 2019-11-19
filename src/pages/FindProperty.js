import React from "react";
import SolidHero from "../components/SolidHero";
import Banner from "../components/Banner";
import PropertiesContainer from "../components/PropertiesContainer";
import { Layout } from "../components/Layout";

const FindProperty = () => {
  return (
    <React.Fragment>
      <SolidHero color="#313E5D">
        <Banner title="Hitta bostad" />
      </SolidHero>
      <Layout>
        <PropertiesContainer />
      </Layout>
    </React.Fragment>
  );
};

export default FindProperty;
