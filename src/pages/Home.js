import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import FeaturedProperty from "../components/featuredProperty";

export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner title="Hitta bostad" subtitle="En subtitel" />
      </Hero>
      <FeaturedProperty />
    </React.Fragment>
  );
}
