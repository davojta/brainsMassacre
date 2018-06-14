import Game from "./game.js";
import mylib from "./mylib";
import { preloadImages } from "./dict";

let game = new Game();
let myGame = game.create.bind(game);

mylib.preload(preloadImages);
window.onload = function() {
  document.querySelector(".loading-page").style.display = "none";
  document.querySelector(".reg-page").style.display = "block";
};

document.getElementById("reg-form").addEventListener("submit", event => {
  event.preventDefault();
  mylib.validateForm("player-name", myGame);
});

/*let audio = new Audio();
audio.volume = 0.1;
audio.src = "./audio/soundtrack.mp3";
audio.autoplay = true;
audio.loop = true;*/
