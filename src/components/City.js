import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function City({ city }) {
  const { title, cityslug, featuredImage } = city;

  return (
    <Link to={`/hitta-bostad/${cityslug}`}>
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

City.propTypes = {
  city: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cityslug: PropTypes.string.isRequired,
    featuredImage: PropTypes.string.isRequired
  })
};
