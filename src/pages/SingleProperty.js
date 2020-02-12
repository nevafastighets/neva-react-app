import React, { Component } from "react";
import Banner from "../components/Banner";
import { HashLink as Link } from "react-router-hash-link";
import SolidHeroFull from "../components/SolidHeroFull";
import { PropertyContext } from "../PropertyContext";
import StyledHero from "../components/StyledHero";
import Title from "../components/Title";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

import { Navigationbar } from "../components/Navigationbar";
import Footer from "../components/Footer";
import SubFooterProperty from "../components/SubFooterProperty";

const BannerMargin = styled.div`
  margin-top: 6rem;
`;

export default class SingleProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug
    };
  }

  static contextType = PropertyContext;

  render() {
    const { getProperty } = this.context;
    const property = getProperty(this.state.slug);

    if (!property) {
      return (
        <React.Fragment>
          <Navigationbar />
          <SolidHeroFull color="#504c35">
            <Banner
              title="404-Fel"
              subtitle="Vi hittade tyvärr inte bostaden du letade efter."
            />
          </SolidHeroFull>
          <Footer />
        </React.Fragment>
      );
    }
    const {
      title,
      images,
      featuredImage,
      textareaone,
      textareatwo,
      facilities,
      bolag,
      city
    } = property;

    return (
      <React.Fragment>
        <Navigationbar />
        <StyledHero img={featuredImage}>
          <div className="single-overlay"></div>
          <BannerMargin>
            <Banner
              title={`${title}`}
              subtitle={`${city.fields.title}`}
            ></Banner>
          </BannerMargin>
        </StyledHero>
        <div className="row single-property-row row-eq-height">
          <div className="single-property-title col-sm-12 col-lg-6 col-md-12 col-xs-12 container-left">
            <Title title={`${title}`} />
            <p>
              Denna fastighet ägs av{" "}
              <Link to={"../../vara-bolag#" + bolag.fields.companyslug}>
                {bolag.fields.companyName}
              </Link>
            </p>
            <p>{textareaone}</p>
          </div>
          <div className="col-sm-12 col-lg-6 col-md-12 col-xs-12 container-right align-content-center flex-wrap accent-background accent-p accent-facility">
            <div className="facility-title">
              <p>Bekvämligheter:</p>
            </div>
            {facilities.map((item, index) => {
              return (
                <div key={index} className="facility">
                  <p>- {item}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row row-eq-height">
          <div className="col-sm-12 col-lg-6 col-md-12 col-xs-12 container-left vertical-align column-style-2 accent-p">
            <p>{textareatwo}</p>
          </div>
          <div className="col-sm-12 col-lg-6 col-md-12 col-xs-12 single-property-gallery">
            <Carousel className="single-property-gallery-carousel">
              {images.map((item, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={item + "?fit=scale&h=560"}
                      alt=""
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
        <SubFooterProperty city={city} />
        <Footer />
      </React.Fragment>
    );
  }
}
