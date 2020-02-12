import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import SolidHeroFull from "../components/SolidHeroFull";
import { ExperienceContext } from "../ExperienceContext";
import { Layout } from "../components/Layout";
import Title from "../components/Title";
import styled from "styled-components";

import { Navigationbar } from "../components/Navigationbar";
import Footer from "../components/Footer";

const BannerMargin = styled.div`
  margin-top: 6rem;
`;

export default class SingleExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experienceslug: this.props.match.params.experienceslug
    };
  }

  static contextType = ExperienceContext;

  render() {
    const { getExperience } = this.context;
    const experience = getExperience(this.state.experienceslug);

    if (!experience) {
      return (
        <React.Fragment>
          <Navigationbar />
          <SolidHeroFull color="#504c35">
            <Banner
              title="404-Fel"
              subtitle="Vi hittade tyvärr inte det du letade efter."
            />
          </SolidHeroFull>
          <Footer />
        </React.Fragment>
      );
    }
    const {
      headerImage,
      headerTitle,
      headerSubtitle,
      contentTitle,
      pageText
    } = experience;

    return (
      <React.Fragment>
        <Navigationbar />
        <Hero height="31" img={headerImage}>
          <div className="overlay"></div>
          <BannerMargin>
            <Banner title={headerTitle} subtitle={headerSubtitle} />
          </BannerMargin>
        </Hero>
        <Layout>
          <Title className="text-left" title={contentTitle} />
          <p>{pageText}</p>
        </Layout>
        <Footer />
      </React.Fragment>
    );
  }
}
