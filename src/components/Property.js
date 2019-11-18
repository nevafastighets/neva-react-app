import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../assets/träd1.jpg";
import PropTypes from "prop-types";

export default function Property({ property }) {
  const { title, slug, images } = property;

  return (
    <article className="property">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="" />
        <Link
          to={`/hitta-bostad/vaxjo/${slug}`}
          className="btn-primary property-link"
        >
          Visa
        </Link>
      </div>
      <p className="property-info">{title}</p>
    </article>
  );
}

Property.propTypes = {
  property: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};
