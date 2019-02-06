import React from 'react';
import ReactDOM from "react-dom";
import {LandingPage} from './LandingPage';

window.initReact = ()=>{
  ReactDOM.render(<LandingPage/>, document.getElementById("react-entry"))  
}
