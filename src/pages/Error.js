import React from "react";
import SolidHeroFull from "../components/SolidHeroFull";
import Banner from "../components/Banner";

export default function Error() {
  return (
    <React.Fragment>
      <SolidHeroFull color="#504c35">
        <Banner
          title="404-Fel"
          subtitle="Vi hittade tyvärr inte det du letade efter."
        />
      </SolidHeroFull>
    </React.Fragment>
  );
}
