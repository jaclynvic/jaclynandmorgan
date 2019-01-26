import React, { Component } from "react";
import mapData from "./mapData.json";

const BACKGROUND_LOADED = "BACKGROUND_LOADED";
const FOREGROUND_LOADED = "FOREGROUND_LOADED";

export class InteractiveMapWrapper extends Component {
  constructor(props) {
    super(props);
    this.onLoad = this.onLoad.bind(this);
    this.onHoverItem = this.onHoverItem.bind(this);
    this.state = {
      mapData: mapData,
      waitUntilLoaded: [BACKGROUND_LOADED, FOREGROUND_LOADED],
      highlighted: null
    };
  }
  onLoad(itemLoaded) {
    return () => {
      this.setState(({ waitUntilLoaded }) => ({
        waitUntilLoaded: waitUntilLoaded.filter(target => target === itemLoaded)
      }));
    };
  }
  onHoverItem(item){
    return ()=> {
      this.setState(() => ({
        highlighted: item
      }));
    }
  }
  render() {
    return (
      <InteractiveMap
        allLoaded={!this.state.waitUntilLoaded.length}
        onHoverItem={this.onHoverItem}
        highlighted={this.state.highlighted}
        onLoadMapImages={this.onLoad}
        mapData={this.state.mapData}
      />
    );
  }
}

const loadedClassName = (show) => show ? "show" : "hide"


const InteractiveMap = ({ mapData, onLoadMapImages, allLoaded, onHoverItem, highlighted }) => {
  const showImage = loadedClassName(allLoaded);
  return (
    <div>
      <img
        className={`map-bg ${showImage}`}
        id="map-background"
        src="/assets/map/images/background1.png"
        alt="map background"
        onLoad={onLoadMapImages(BACKGROUND_LOADED)}
      />
      {mapData.map(({ id, name }) => {
        return (
        <img
          key={id}
          className={`map-detail coloring ${loadedClassName(highlighted === id)}`}
          id={`${id}-color`}
          alt={name}
          src={`/assets/map/images/${id}.png`}
        />
      )})}
      <img
        src="/assets/map/images/foreground.png"
        className={`map-detail ${showImage}`}
        id="map-foreground"
        alt="camp map foreground"
        onLoad={onLoadMapImages(FOREGROUND_LOADED)}
      />
      {mapData.map(({ id, name }) => (
        <button 
          key={id} 
          title={name} 
          id={id} className="map-btn"
          onMouseOver={onHoverItem(id)}
          onMouseOut={onHoverItem(null)}
          >
          {name}
        </button>
      ))}
      {!allLoaded && <img
        id="map-skeleton" 
        className="bg-loading"
        src="/assets/map/images/map.svg"
      />}
    </div>
  );
};
