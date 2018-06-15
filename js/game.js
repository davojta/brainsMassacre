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
    document.querySelector(".game-page").style.display = "block";
    const playerName = document.querySelector("input").value;

    this.player = new Player(playerName);
    this.player.drawPlayer();

    this.monster = new Monster(this.player.score);
    this.monster.drawMonster(this.player);

    this.spell = new Spell();
    this.btnChooseSpell = this.spell.open.bind(this.spell);
    document
      .getElementById("btn-choose-spell")
      .addEventListener("click", this.btnChooseSpell);
    document
      .querySelector(".modal-window__spell")
      .addEventListener("click", () => {
        this.spell.chooseSpell(event);
      });
    document.getElementById("btn-answer").addEventListener("click", () => {
      this.setAnswer();
    });
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
    const ul = document.querySelector(".sortable");
    let ans = "";
    Array.prototype.forEach.call(ul.children, item => {
      ans += item.innerText;
    });
    document.getElementById("answer").value = ans;
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
      setTimeout(() => this.monster.stopDie(), 1999);
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
    this.player.health = Math.min(
      this.player.health + mylib.getRandomFromTo(10, 15 + this.player.score),
      this.player.startHealth
    );
    this.player.drawHealth();
    document
      .getElementById("btn-choose-spell")
      .addEventListener("click", this.btnChooseSpell);
  }

  finish() {
    document.querySelector(".game-page").style.display = "none";
    document.querySelector(".scores-page").style.display = "block";
    localStorage.setItem(
      "game" + Date.now(),
      this.player.name + "," + this.player.score
    );
    mylib.createHighscoresTable();
  }
}

export default Game;
