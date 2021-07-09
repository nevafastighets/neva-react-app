import React from "react";
import "./App.css";

import Home from "./pages/Home";
import OurProperty from "./pages/OurProperty";
import FreeObject from "./pages/FreeObject";
import SingleCity from "./pages/SingleCity";
import SingleProperty from "./pages/SingleProperty";
import AboutUs from "./pages/AboutUs";
import RentObject from "./pages/RentObject";
import Contact from "./pages/Contact";
import SingleExperience from "./pages/SingleExperience";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/vara-fastigheter" component={OurProperty} />
        <Route
          exact
          path="/vara-fastigheter/:cityslug"
          component={SingleCity}
        />
        <Route exact path="/lediga-objekt" component={FreeObject} />
        <Route exact path="/om-neva" component={AboutUs} />
        <Route exact path="/hyresgaster" component={RentObject} />
        <Route exact path="/kontakt" component={Contact} />
        <Route
          exact
          path="/vara-fastigheter/:cityslug/:slug"
          component={SingleProperty}
        />
        <Route
          exact
          path="/upplev/:experienceslug"
          component={SingleExperience}
        />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
