/* jshint esversion: 9 */
import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import MyPortfolio from "./Pages/MyPortfolio";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Brand from "./Pages/Brand";
import Photo from "./Pages/Photo";
import Web from "./Pages/Web";

import "./App.css";
import ContactDetails from "./Pages/ContactDetails";
import Artwork from "./Pages/Artwork";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/" component={ContactDetails} />
        <Route exact path="/myportfolio/" component={MyPortfolio} />
        <Route exact path="/myportfolio/web-development/" component={Web} />
        <Route exact path="/myportfolio/photo-retouch/" component={Photo} />
        <Route exact path="/myportfolio/brand-identity/" component={Brand} />
        <Route
          exact
          path="/myportfolio/web-development/:artName"
          component={Artwork}
        />
        <Route
          exact
          path="/myportfolio/photo-retouch/:artName"
          component={Artwork}
        />
        <Route
          exact
          path="/myportfolio/brand-identity/:artName"
          component={Artwork}
        />
        <Route exact path="/contact/" component={Contact} />
        <Route exact path="/about/" component={About} />
        <Route component={Error}/>
      </Switch>
    </>
  );
}

export default App;
