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

document.getElementById("btn-new-game").addEventListener("click", () => {
  game.create();
});

document.querySelector(".modal-window__spell").addEventListener("click", () => {
  game.spell.chooseSpell(event);
});

document.getElementById("btn-answer").addEventListener("click", () => {
  game.setAnswer();
});

/*let audio = new Audio();
audio.volume = 0.03;
audio.src = "./audio/soundtrack.mp3";
audio.autoplay = true;
audio.loop = true;*/
