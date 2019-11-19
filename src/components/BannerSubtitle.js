import React from "react";

export default function BannerSubtitle({ title, subtitle }) {
  return (
    <React.Fragment>
      <div className="banner">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </React.Fragment>
  );
}
