import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Property({ property }) {
  const { title, slug, featuredImage, city } = property;
  return (
    <Link to={`/hitta-bostad/${city.fields.cityslug}/${slug}`}>
      <article className="property">
        <div className="img-container">
          <img src={featuredImage} alt="" />
          <div className="img-container-overlay"></div>
          <span className="property-title">{title}</span>
        </div>
      </article>
    </Link>
  );
}

Property.propTypes = {
  property: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    featuredImage: PropTypes.string.isRequired
  })
};
