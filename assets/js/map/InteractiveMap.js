import React, { Component } from "react";
import mapData from "./mapData.json";

export class InteractiveMapWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData: mapData
    };
  }
  render() {
    debugger;
    return <InteractiveMap mapData={this.state.mapData} />;
  }
}

const InteractiveMap = ({ mapData }) => {
  return (
    <div id="map-base" className="container">
      <img
        className="map-bg"
        id="map-background"
        src="/assets/map/images/background.png"
        alt="map background"
      />
      {mapData.map(({ id, name }) => (
        <img key={id} className="map-detail coloring" id={`${id}-color`} alt={name} />
      ))}
      <img
        src="/assets/map/images/foreground.png"
        className="map-detail"
        id="map-foreground"
        alt="camp map foreground"
      />
      {mapData.map(({ id, name }) => (
        <button  key={id} title={name} id={id} className="map-btn">
          {name}
        </button>
      ))}
    </div>
  );
};
