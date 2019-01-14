import mapData from "./data/map-data.json";
import mapDetailsLong from "./data/map-data-long.json";

window.onload = () => {
  const mainModal = document.getElementById("modal");
  const ids = Object.keys(mapData).reduce((acc, key) => {
    const details = mapData[key];
    if (details.title) {
      const el = document.getElementById(key);
      details.el = el;
      acc[key] = details;

      el.addEventListener("click", () => {
        const desc =
          mapDetailsLong[details.description] || details.description;
        mainModal.innerHTML = `
          <p class="details">
            <h2 class="title">${details.title}</h2>${desc}
          </p>`;
      });
    }
    return acc;
  }, {});
};
