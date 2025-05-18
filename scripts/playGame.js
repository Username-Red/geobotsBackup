import { playScene } from "./scenes.js";

const bgMusic = new Howl({
        src: ['./music/backgroundMusic.mp3'],
        loop: true,
        volume: 0.5
    });
  
bgMusic.play();

playScene('intro');
