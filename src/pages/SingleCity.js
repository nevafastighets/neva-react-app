import React, { Component } from "react";
import Banner from "../components/Banner";
import SolidHeroFull from "../components/SolidHeroFull";
import { CityContext } from "../CityContext";
import StyledHero from "../components/StyledHero";
import CityPropertiesContainer from "../components/CityPropertiesContainer";
import { Layout } from "../components/Layout";

export default class SingleCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityslug: this.props.match.params.cityslug
    };
  }

  static contextType = CityContext;

  render() {
    const { getCity } = this.context;
    const city = getCity(this.state.cityslug);

    if (!city) {
      return (
        <SolidHeroFull color="#504c35">
          <Banner
            title="404-Fel"
            subtitle="Vi hittade tyvärr inte det du letade efter."
          />
        </SolidHeroFull>
      );
    }
    const { title, featuredImage, id } = city;

    return (
      <React.Fragment>
        <StyledHero img={featuredImage}>
          <div className="single-overlay"></div>
          <Banner title={`${title}`}></Banner>
        </StyledHero>
        <Layout>
          <section>
            <CityPropertiesContainer cityid={`${id}`} />
          </section>
        </Layout>
      </React.Fragment>
    );
  }
}
