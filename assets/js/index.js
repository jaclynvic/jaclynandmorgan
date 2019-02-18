import React from 'react';
import ReactDOM from "react-dom";
import {LandingPage} from './LandingPage';
import { InteractiveMapWrapper } from "./InteractiveMap";

window.initReact = ()=>{
  ReactDOM.render(<LandingPage/>, document.getElementById("react-entry"))  
  ReactDOM.render(<InteractiveMapWrapper />, document.getElementById("map-entry"))  
}
