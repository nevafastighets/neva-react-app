import React from "react";

export default function Title({ title, subtitle, className }) {
  if (!subtitle) {
    return (
      <React.Fragment>
        <div
          className={
            className ? "section-title" + " " + className : "section-title"
          }
        >
          <h2>{title}</h2>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div
          className={
            className ? "section-title" + " " + className : "section-title"
          }
        >
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
      </React.Fragment>
    );
  }
}
