import React, { Component } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { PropertyContext } from "../PropertyContext";
import StyledHero from "../components/StyledHero";
import { Title } from "../components/Title";
import { Carousel } from "react-bootstrap";

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
        <div className="error">
          <h3>Kan inte hitta någon fastighet</h3>
          <Link to="/hitta-bostad" className="btn-primary">
            Tillbaka
          </Link>
        </div>
      );
    }
    const {
      title,
      images,
      featuredImage,
      textareaone,
      textareatwo,
      facilities
    } = property;

    return (
      <React.Fragment>
        <StyledHero img={featuredImage}>
          <div className="single-overlay"></div>
          <Banner title={`${title}`}></Banner>
        </StyledHero>
        <div className="row single-property-row row-eq-height">
          <div className="single-property-title col-sm-12 col-lg-6 col-md-12 col-xs-12 container-left">
            <Title title={`${title}`} />
            <p>{textareaone}</p>
          </div>
          <div className="col-sm-12 col-lg-6 col-md-12 col-xs-12 container-right align-content-center flex-wrap accent-background accent-p accent-facility">
            <div className="facility-title">
              <p>Denna fastighet:</p>
            </div>
            {facilities.map((item, index) => {
              return (
                <div className="facility">
                  <p key={index}>- {item}</p>
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
      </React.Fragment>
    );
  }
}
