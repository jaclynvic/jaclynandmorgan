import mapDetails from "./map-data.json";
import { InteractiveMap} from './interactiveMap';


setTimeout(function() {
  const base = document.getElementById("map-base");
  const interactiveMap = new InteractiveMap(base, mapDetails);
}, 1000);

function bgLoaded() {
  document.getElementById("map-skeleton").remove();
}
