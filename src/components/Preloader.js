import React from "react";
import loadingGif from "../assets/gif/loading-dots.gif";

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader d-flex justify-content-center align-items-center">
        <div>
          <img src={loadingGif} alt="" />
        </div>
      </div>
    </div>
  );
}
