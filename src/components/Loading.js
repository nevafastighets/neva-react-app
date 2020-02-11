import React from "react";
import loadingGif from "../assets/gif/loading.gif";

export default function Loading() {
  return (
    <div className="loading">
      <div className="loading d-flex justify-content-center align-items-center">
        <div>
          <img src={loadingGif} alt="" />
        </div>
      </div>
    </div>
  );
}
