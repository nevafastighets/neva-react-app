import React from "react";
import Fade from "react-reveal/Fade";

export default function Banner({ title, subtitle }) {
  if (!subtitle) {
    return (
      <React.Fragment>
        <div className="banner">
          <Fade bottom>
            <h1>{title}</h1>
          </Fade>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="banner">
          <Fade bottom>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </Fade>
        </div>
      </React.Fragment>
    );
  }
}
