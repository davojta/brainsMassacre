import Game from "./game.js";
import mylib from "./mylib";

let game = new Game();
let myGame = game.create.bind(game);

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
  preload(
    "../img/spritePlayer.png",
    "./img/arena1.jpg",
    "/img/arena2.png",
    "img/arena3.png",
    "arena4.png",
    "./img/heal.png",
    "./img/sword.png",
    "./img/smoke.png",
    "./img/spritePlayer.png",
    "./img/spritePlayerDie.png",
    "./img/spritePlayerFire.png",
    "./img/spritePlayerHeal1.png",
    "./img/spritePlayerHurt.png",
    "./img/monster/die/head/monsterHeadDie1.png",
    "./img/monster/die/head/monsterHeadDie2.png",
    "./img/monster/die/head/monsterHeadDie3.png",
    "./img/monster/die/body/monsterBodyDie1.png",
    "./img/monster/die/body/monsterBodyDie2.png",
    "./img/monster/die/body/monsterBodyDie3.png",
    "./img/monster/die/legs/monsterLegsDie1.png",
    "./img/monster/die/legs/monsterLegsDie2.png",
    "./img/monster/die/legs/monsterLegsDie3.png",
    "./img/monster/fire/head/monsterHeadFire1.png",
    "./img/monster/fire/head/monsterHeadFire2.png",
    "./img/monster/fire/head/monsterHeadFire3.png",
    "./img/monster/fire/body/monsterBodyFire1.png",
    "./img/monster/fire/body/monsterBodyFire2.png",
    "./img/monster/fire/body/monsterBodyFire3.png",
    "./img/monster/fire/legs/monsterLegsFire1.png",
    "./img/monster/fire/legs/monsterLegsFire2.png",
    "./img/monster/fire/legs/monsterLegsFire3.png",
    "./img/monster/hurt/head/monsterHeadHurt1.png",
    "./img/monster/hurt/head/monsterHeadHurt2.png",
    "./img/monster/hurt/head/monsterHeadHurt3.png",
    "./img/monster/hurt/body/monsterBodyHurt1.png",
    "./img/monster/hurt/body/monsterBodyHurt2.png",
    "./img/monster/hurt/body/monsterBodyHurt3.png",
    "./img/monster/hurt/legs/monsterLegsHurt1.png",
    "./img/monster/hurt/legs/monsterLegsHurt2.png",
    "./img/monster/hurt/legs/monsterLegsHurt3.png",
    "./img/monster/idle/heads/monsterHeadIdle1.png",
    "./img/monster/idle/heads/monsterHeadIdle2.png",
    "./img/monster/idle/heads/monsterHeadIdle3.png",
    "./img/monster/idle/bodies/monsterBodyIdle1.png",
    "./img/monster/idle/bodies/monsterBodyIdle2.png",
    "./img/monster/idle/bodies/monsterBodyIdle3.png",
    "./img/monster/idle/legs/monsterLegsIdle1.png",
    "./img/monster/idle/legs/monsterLegsIdle2.png",
    "./img/monster/idle/legs/monsterLegsIdle3.png",
    "./img/capitalstask/belarus.jpeg",
    "./img/capitalstask/canada.jpg",
    "./img/capitalstask/germany.jpg",
    "./img/capitalstask/greatbritain.jpg",
    "./img/capitalstask/italy.jpg",
    "./img/capitalstask/lithuania.jpg",
    "./img/capitalstask/spain.jpg",
    "./img/capitalstask/sweden.jpg",
    "./img/capitalstask/usa.png",
    "./img/equationTask/apple.png",
    "./img/equationTask/banana.png",
    "./img/equationTask/coconut.png",
    "./img/redudanttask/bear.jpg",
    "./img/redudanttask/cucumber.jpg",
    "./img/redudanttask/elephant.jpg",
    "./img/redudanttask/ferrari.jpg",
    "./img/redudanttask/lada.jpg",
    "./img/redudanttask/lion.jpg",
    "./img/redudanttask/mersedes.jpg",
    "./img/redudanttask/oranges.jpg",
    "./img/redudanttask/ostrich.jpg",
    "./img/redudanttask/pears.jpg",
    "./img/redudanttask/pinguin.jpg",
    "./img/redudanttask/sinica.jpg",
    "./img/123.jpg"
  );
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
