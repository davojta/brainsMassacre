import Game from "./game.js";
import mylib from "./mylib";

let game = new Game();
let myGame = game.create.bind(game);

regForm.addEventListener("submit", event => {
  event.preventDefault();
  mylib.validateForm("playerName", myGame);
});

/*let audio = new Audio();
audio.volume = 0.1;
audio.src = "./audio/soundtrack.mp3";
audio.autoplay = true;
audio.loop = true;*/
