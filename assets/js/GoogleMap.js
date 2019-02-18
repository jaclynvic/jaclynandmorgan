import React, {Component} from 'react';
import styles from "../gMapStyles.json";

const OVY_CAMP = {lat:37.310741, lon:-122.3137944 }

export class GoogleMap extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.map = this.createMap.call(this);
    this.addSpotMarker(this.map);
  }

  createMap() {
    const mapOptions = {
      zoom: 10,
      center: new google.maps.LatLng(OVY_CAMP.lat, OVY_CAMP.lon),
      streetViewControl: false,
      styles
    };
    return new google.maps.Map(this.mapNode, mapOptions);
  }
  addSpotMarker(map) {
    const spot = new google.maps.Marker({
      position: { lat: OVY_CAMP.lat, lng: OVY_CAMP.lon },
      icon: "/assets/images/heart.png",
      // optimized: false, // stops the marker from flashing
      map
    });
  }

  render(){
    return (<div className="google-map-wrapper" ref={node=>this.mapNode = node}/>);
  }
}