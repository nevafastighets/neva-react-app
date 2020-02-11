import React from "react";
import "./App.css";

import Home from "./pages/Home";
import FindProperty from "./pages/FindProperty";
import OurCompany from "./pages/OurCompany";
import SingleCity from "./pages/SingleCity";
import SingleProperty from "./pages/SingleProperty";
import AboutUs from "./pages/AboutUs";
import RentObject from "./pages/RentObject";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/vara-bolag" component={OurCompany} />
        <Route exact path="/hitta-bostad" component={FindProperty} />
        <Route exact path="/hitta-bostad/:cityslug" component={SingleCity} />
        <Route exact path="/om-oss" component={AboutUs} />
        <Route exact path="/hyresobjekt" component={RentObject} />
        <Route exact path="/kontakt" component={Contact} />
        <Route
          exact
          path="/hitta-bostad/:cityslug/:slug"
          component={SingleProperty}
        />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
