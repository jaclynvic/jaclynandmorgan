import React from "react";
import ReactDOM from "react-dom";
import { LandingPage } from "./LandingPage";
import { InteractiveMapWrapper } from "./InteractiveMap";
import { GoogleMap } from "./GoogleMap";

window.initReact = () => {
  ReactDOM.render(<LandingPage />, document.getElementById("react-entry"));
  ReactDOM.render(
    <InteractiveMapWrapper />,
    document.getElementById("map-entry")
  );
  ReactDOM.render(<GoogleMap />, document.getElementById("google-map-entry"));
};
