import React from "react";
import "./App.css";

import Home from "./pages/Home";
import FindProperty from "./pages/FindProperty";
import SingleCity from "./pages/SingleCity";
import SingleProperty from "./pages/SingleProperty";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";
import { Navigationbar } from "./components/Navigationbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navigationbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hitta-bostad" component={FindProperty} />
        <Route exact path="/hitta-bostad/:cityslug" component={SingleCity} />
        <Route
          exact
          path="/hitta-bostad/:cityslug/:slug"
          component={SingleProperty}
        />
        <Route component={Error} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
