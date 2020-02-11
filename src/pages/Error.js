import React from "react";
import SolidHeroFull from "../components/SolidHeroFull";
import Banner from "../components/Banner";

import { Navigationbar } from "../components/Navigationbar";
import Footer from "../components/Footer";

export default function Error() {
  return (
    <React.Fragment>
      <Navigationbar />
      <SolidHeroFull color="#504c35">
        <Banner
          title="404-Fel"
          subtitle="Vi hittade tyvärr inte det du letade efter."
        />
      </SolidHeroFull>
      <Footer />
    </React.Fragment>
  );
}
