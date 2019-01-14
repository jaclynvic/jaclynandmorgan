
import sAL from "simple_animation_loop";
import { Polaroid } from "./Polaroid";
import { RecordPlayer } from './RecordPlayer';
import {Gallery} from './Gallery';

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

const spinTitle = (loop)=>{
  const title = document.getElementById('explore-title-treatment');
  loop.setAnimationInterval(()=>{
    console.log('called')
    title.className = "half-spin"
    const text = title.innerText.split('&').reverse().join('&');
    loop.setAnimationTimeout(()=>{
      title.innerText = text;
      loop.setAnimationTimeout(()=>{
        title.className = ""

      },200)
    },1000)

  },12200)
}

export const createApp = () => {
  const entry = document.getElementById("entry");
  const loop = new sAL();
  loop.start();
  const options = {entry, loop}
  spinTitle(loop);
  // createPolaroidPics(options);
  entry.appendChild(new Gallery({loop}).el)
  // createRecordPlayer(options)
};


