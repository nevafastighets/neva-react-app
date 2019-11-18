import React, { Component } from "react";
import defaultBcg from "../assets/träd1.jpg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { PropertyContext } from "../PropertyContext";
import StyledHero from "../components/StyledHero";

export default class SingleProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
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
    const { title, description, images } = property;
    const [mainImg, ...defaultImg] = images;

    return (
      <React.Fragment>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${title}`}>
            <p>Hej</p>
          </Banner>
        </StyledHero>
        <section className="single-property">
          <div className="single-property-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} />;
            })}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
