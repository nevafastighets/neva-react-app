import React from "react";
import SolidHeroFull from "../components/SolidHeroFull";
import BannerSubtitle from "../components/BannerSubtitle";

export default function Error() {
  return (
    <React.Fragment>
      <SolidHeroFull color="#504c35">
        <BannerSubtitle
          title="404-Fel"
          subtitle="Vi hittade tyvärr inte det du letade efter."
        />
      </SolidHeroFull>
    </React.Fragment>
  );
}
