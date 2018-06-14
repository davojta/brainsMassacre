import Game from "./game.js";
import mylib from "./mylib";

let game = new Game();
let myGame = game.create.bind(game);

/*function loadImages() {
  let img = new Image();
  img.src = "./img/arena1.jpg";
  img.src = "./img/123.jpg";
  img.src = "./img/heal.png";
}*/

let images = new Array();
function preload(...args) {
  for (let i = 0; i < args.length; i++) {
    images[i] = new Image();
    images[i].src = args[i];
  }
}

function xxx() {
  document.querySelector(".loading").style.display = "none";
  document.querySelector(".regPage").style.display = "block";
}

let promise = new Promise(resolve => {
  preload("img/arena1.jpg", "img/123.jpg", "img/heal.png");
});
promise.then(xxx());

regForm.addEventListener("submit", event => {
  event.preventDefault();
  mylib.validateForm("playerName", myGame);
});

/*let audio = new Audio();
audio.volume = 0.1;
audio.src = "./audio/soundtrack.mp3";
audio.autoplay = true;
audio.loop = true;*/
