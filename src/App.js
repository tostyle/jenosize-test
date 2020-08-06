import React from "react";
import { Router } from "@reach/router";
import Home from "pages/Home";
import Map from "pages/Map";
import PlaceSearch from "pages/PlaceSearch";
import TopBar from "components/TopBar";
import Footer from "components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import PlaceSearchModule from "pages/PlaceSearch/placeSearchModule";

function App() {
  return (
    <PlaceSearchModule>
      <div>
        <TopBar />
        <Router>
          <Home path="/" />
          <PlaceSearch path="/search" />
          <Map path="/map" />
        </Router>
        <Footer />
      </div>
    </PlaceSearchModule>
  );
}

export default App;
