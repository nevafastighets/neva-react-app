import React from "react";

export default function Banner({ title, subtitle }) {
  if (!subtitle) {
    return (
      <React.Fragment>
        <div className="banner">
          <h1>{title}</h1>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="banner">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </React.Fragment>
    );
  }
}
