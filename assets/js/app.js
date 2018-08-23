
import sAL from "simple_animation_loop";
import { Polaroid } from "./Polaroid";
import { RecordPlayer } from './RecordPlayer';

const getSrc = (indexes) => {
  const randIndex = Math.round(Math.random() * indexes.length - 1);
  var value = indexes.splice(randIndex, 1)
  return `/assets/images/download-${value[0]}.jpg`
}

const createPolaroidPics = ({entry, loop}) =>{
  var indexes = new Array(36).fill().map((_,i) => i + 1);

   var images = new Array(12).fill().map((_, i) => {

   
    const polaroid = new Polaroid({
      srcs: [getSrc(indexes), getSrc(indexes), getSrc(indexes)],
      loop
    });

    const padding = 100;
    polaroid.el.style.left = `${i * 350 + padding * (i + 1)}px`;
    entry.appendChild(polaroid.el);
    return polaroid;
  });

  document.querySelector('.record-wrap').addEventListener('scroll', ()=>{
    images.forEach((image, i)=>{
       image.checkVisibility()
    })
  })
}

const createRecordPlayer = ({entry, loop}) => {
  entry.appendChild(new RecordPlayer({ loop }).el);
}


export const createApp = () => {
  const entry = document.getElementById("entry");
  const loop = new sAL();
  const options = {entry, loop}
  createPolaroidPics(options);
  // createRecordPlayer(options)
};


