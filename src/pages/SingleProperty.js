import React, { Component } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { PropertyContext } from "../PropertyContext";
import StyledHero from "../components/StyledHero";

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
    const { title, images, featuredImage } = property;

    return (
      <React.Fragment>
        <StyledHero img={featuredImage}>
          <Banner title={`${title}`}></Banner>
        </StyledHero>
        <section className="single-property">
          <div className="single-property-images">
            {images.map((item, index) => {
              return <img key={index} src={item} alt="" />;
            })}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
