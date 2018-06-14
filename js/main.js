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
    "img/arena1.jpg",
    "img/arena2.png",
    "img/arena3.png",
    "img/arena4.png",
    "img/heal.png",
    "img/sword.png",
    "img/smoke.png",
    "img/spritePlayer.png",
    "img/spritePlayerDie.png",
    "img/spritePlayerFire.png",
    "img/spritePlayerHeal1.png",
    "img/spritePlayerHurt.png",
    "img/monster/die/head/monsterHeadDie1.png",
    "img/monster/die/head/monsterHeadDie2.png",
    "img/monster/die/head/monsterHeadDie3.png",
    "img/monster/die/body/monsterHeadDie1.png",
    "img/monster/die/body/monsterHeadDie2.png",
    "img/monster/die/body/monsterHeadDie3.png",
    "img/monster/die/legs/monsterHeadDie1.png",
    "img/monster/die/legs/monsterHeadDie2.png",
    "img/monster/die/legs/monsterHeadDie3.png",
    "img/monster/fire/head/monsterHeadFire1.png",
    "img/monster/fire/head/monsterHeadFire2.png",
    "img/monster/fire/head/monsterHeadFire3.png",
    "img/monster/fire/body/monsterHeadFire1.png",
    "img/monster/fire/body/monsterHeadFire2.png",
    "img/monster/fire/body/monsterHeadFire3.png",
    "img/monster/fire/legs/monsterHeadFire1.png",
    "img/monster/fire/legs/monsterHeadFire2.png",
    "img/monster/fire/legs/monsterHeadFire3.png",
    "img/monster/hurt/head/monsterHeadHurt1.png",
    "img/monster/hurt/head/monsterHeadHurt2.png",
    "img/monster/hurt/head/monsterHeadHurt3.png",
    "img/monster/hurt/body/monsterHeadHurt1.png",
    "img/monster/hurt/body/monsterHeadHurt2.png",
    "img/monster/hurt/body/monsterHeadHurt3.png",
    "img/monster/hurt/legs/monsterHeadHurt1.png",
    "img/monster/hurt/legs/monsterHeadHurt2.png",
    "img/monster/hurt/legs/monsterHeadHurt3.png",
    "img/monster/idle/head/monsterHeadIdle1.png",
    "img/monster/idle/head/monsterHeadIdle2.png",
    "img/monster/idle/head/monsterHeadIdle3.png",
    "img/monster/idle/body/monsterHeadIdle1.png",
    "img/monster/idle/body/monsterHeadIdle2.png",
    "img/monster/idle/body/monsterHeadIdle3.png",
    "img/monster/idle/legs/monsterHeadIdle1.png",
    "img/monster/idle/legs/monsterHeadIdle2.png",
    "img/monster/idle/legs/monsterHeadIdle3.png",
    "img/capitalstask/belarus.jpg",
    "img/capitalstask/canada.jpg",
    "img/capitalstask/germany.jpg",
    "img/capitalstask/greatbritain.jpg",
    "img/capitalstask/italy.jpg",
    "img/capitalstask/lithuania.jpg",
    "img/capitalstask/spain.jpg",
    "img/capitalstask/sweden.jpg",
    "img/capitalstask/usa.png",
    "img/equationTask/apple.png",
    "img/equationTask/banana.png",
    "img/equationTask/coconut.png",
    "img/redudanttask/bear.jpg",
    "img/redudanttask/cucumber.jpg",
    "img/redudanttask/elephant.jpg",
    "img/redudanttask/ferrari.jpg",
    "img/redudanttask/lada.jpg",
    "img/redudanttask/lion.jpg",
    "img/redudanttask/mersedes.jpg",
    "img/redudanttask/oranges.jpg",
    "img/redudanttask/ostrich.jpg",
    "img/redudanttask/pears.jpg",
    "img/redudanttask/pinguin.jpg",
    "img/redudanttask/sinica.jpg"
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
