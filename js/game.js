import Player from "./player";
import Monster from "./monster";
import Spell from "./spell";
import mylib from "./mylib";
import { dictMonster } from "./dict";

class Game {
  constructor() {
    this.player;
    this.monster;
    this.spell;
    this.btnChooseSpell;
  }

  create() {
    document.querySelector(".reg-page").style.display = "none";
    document.querySelector(".scores-page").style.display = "none";
    document.querySelector(".game-page").style.display = "block";
    const playerName = document.querySelector("input").value;

    this.player = new Player(playerName);
    this.player.drawPlayer();

    this.monster = new Monster(this.player.score);
    this.monster.drawMonster(this.player);

    this.spell = new Spell();

    /*binding this event to have an opportunity to remove this event from the button*/
    this.btnChooseSpell = this.spell.open.bind(this.spell);

    document
      .getElementById("btn-choose-spell")
      .addEventListener("click", this.btnChooseSpell);
  }

  setAnswer() {
    if (this.spell.task.type === "sort") {
      this.setSortAnswer();
    }
    if (this.spell.task.type === "redundant") {
      this.setRedudantAnswer();
    }
    this.spell.task.answer = document.getElementById("answer").value.toString();

    document.getElementById("answer").style.display = "inline-block";
    document.querySelector(".task-page").style.display = "none";
    document
      .getElementById("btn-choose-spell")
      .removeEventListener("click", this.btnChooseSpell);

    this.spell.cast(this.player, this.monster);
    setTimeout(this.isAlive.bind(this), 2000);
  }

  setSortAnswer() {
    const letters = document.querySelector(".sortable");
    let answer = "";
    Array.prototype.forEach.call(letters.children, item => {
      answer += item.innerText;
    });
    document.getElementById("answer").value = answer;
  }

  setRedudantAnswer() {
    const arrayOfInputs = document.querySelectorAll('input[type="radio"]');
    const chosenInput = Array.prototype.filter.call(
      arrayOfInputs,
      i => i.checked
    )[0];
    if (chosenInput === undefined) {
      return false;
    }
    document.getElementById("answer").value = chosenInput.value;
  }

  isAlive() {
    if (!this.monster.isAlive()) {
      this.monster.die();
      setTimeout(
        () => this.monster.stopDie(),
        1999
      ); /*making time delays to wait the finish of animations*/
      setTimeout(() => this.nextMonster(), 2000);
    } else if (!this.player.isAlive()) {
      this.player.die();
      setTimeout(() => this.finish(), 2000);
    } else {
      document
        .getElementById("btn-choose-spell")
        .addEventListener("click", this.btnChooseSpell);
    }
  }

  /*when the current monster dies make the new monster*/
  nextMonster() {
    const spriteMonster = document.querySelector(".sprite-monster");
    spriteMonster.children[0].classList.remove(
      dictMonster.headsIdle[this.monster.head]
    );
    spriteMonster.children[1].classList.remove(
      dictMonster.bodiesIdle[this.monster.body]
    );
    spriteMonster.children[2].classList.remove(
      dictMonster.legsIdle[this.monster.legs]
    );

    this.player.score += 1;
    this.monster = new Monster(this.player.score);
    this.monster.drawMonster(this.player);

    /*adding some health to the player before the new round*/
    this.player.health = Math.min(
      this.player.health + mylib.getRandomFromTo(10, 15 + this.player.score),
      this.player.startHealth
    );
    this.player.drawHealth();
    document
      .getElementById("btn-choose-spell")
      .addEventListener("click", this.btnChooseSpell);
  }

  /*when the player dies we put hus result to local storage, reset game and create the table with highscores*/
  finish() {
    document.querySelector(".game-page").style.display = "none";
    document.querySelector(".scores-page").style.display = "block";
    localStorage.setItem(
      "game" + Date.now(),
      this.player.name + "," + this.player.score
    );
    this.reset();
    mylib.createHighscoresTable();
  }

  /*bring the page back to it's original state*/
  reset() {
    document
      .querySelector(".sprite-player")
      .classList.remove("sprite-player__die");
    document
      .querySelector(".sprite-player")
      .classList.add("sprite-player__idle");
    const spriteMonster = document.querySelector(".sprite-monster");
    spriteMonster.children[0].classList.remove(
      dictMonster.headsIdle[this.monster.head]
    );
    spriteMonster.children[1].classList.remove(
      dictMonster.bodiesIdle[this.monster.body]
    );
    spriteMonster.children[2].classList.remove(
      dictMonster.legsIdle[this.monster.legs]
    );
    document
      .getElementById("btn-choose-spell")
      .removeEventListener("click", this.btnChooseSpell);
    document
      .querySelector(".game-page")
      .classList.remove(
        dictMonster.backgroundImages[
          this.monster.score % dictMonster.backgroundImages.length
        ]
      );
    document.querySelector("table").innerHTML = "";
  }
}

export default Game;
