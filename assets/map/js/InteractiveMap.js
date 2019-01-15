import { elementBuilder } from "../../js/elementBuilder";

const WAIT_UNTIL_ALL_LOADED_IDS = ["map-background", "map-foreground"]; 

export class InteractiveMap {
  constructor(target, details) {
    this.IMAGE_IDS_TO_LOAD = WAIT_UNTIL_ALL_LOADED_IDS.slice();
    this.mapDetails = details;
    this.target = target;
    this.buttons = [];
    this.init();
    return this;
  }
  init() {
    this.createBackground();
    this.createSkeleton();
    this.createMapDetails();
    this.createMapOutlines();
    this.addButtonsToMap();
    this.addSkeletonToMap();
    this.target = null;
  }
  createMapDetails() {
    const { mapDetails, target } = this;
    Object.keys(mapDetails).forEach(area => {
      const { title } = mapDetails[area];
      // button for hovering
      const button = this.createButton(area, title);
      // colored detail
      const coloredArea = this.createColoredArea(area, title);
      this.addButtonListeners(button, coloredArea);
    });
  }
  createBackground(){
    const background = elementBuilder("img", {
      className: "map-bg",
      id: "map-background",
      src: "/assets/map/images/background.png"
    });
    this.target.appendChild(background);
    background.addEventListener('load', this.doneLoading.bind(this, "map-background"));
  }
  doneLoading(target){
    console.log(target)
    this.IMAGE_IDS_TO_LOAD = this.IMAGE_IDS_TO_LOAD.filter(id=>target !== id);
    if(!this.IMAGE_IDS_TO_LOAD.length){
      this.skeleton && this.skeleton.remove();
      WAIT_UNTIL_ALL_LOADED_IDS.forEach(ID=>{
        document.getElementById(ID).style.opacity = 1;
      })
    }
  }
  createSkeleton(){
    if(this.IMAGE_IDS_TO_LOAD.length){
      this.skeleton = elementBuilder("div", {id:"map-skeleton", className:"bg-loading"});
    }
  }
  createButton(area, title) {
    const button = elementBuilder("button", {
      title,
      innerText: title,
      id: area,
      className: "map-btn"
    });
    this.buttons.push(button);
    return button;

  }
  createColoredArea(area, title) {
    const coloredArea = elementBuilder("img", {
      src: `/assets/map/images/${area}.png`,
      className: "map-detail coloring",
      id: `${area}-color`,
      alt: title
    });
    this.target.appendChild(coloredArea);
    this.mapDetails[area].el = coloredArea;
    return coloredArea;
  }
  addButtonListeners(button, coloredArea) {
    button.addEventListener("mouseover", () => {
      coloredArea.style.opacity = 1;
    });
    button.addEventListener("mouseout", () => {
      coloredArea.style.opacity = 0;
    });
  }
  addButtonsToMap() {
    this.buttons.forEach(btn => this.target.appendChild(btn));
  }
  addSkeletonToMap() {
    this.target.appendChild(this.skeleton);
  }
  createMapOutlines(target) {
    const outlines = elementBuilder("img", {
      src: "/assets/map/images/foreground.png",
      className: "map-detail",
      id: "map-foreground",
      alt: "camp map foreground"
    });

    this.target.appendChild(outlines);
    outlines.addEventListener('load', this.doneLoading.bind(this, "map-foreground"));

  }
}