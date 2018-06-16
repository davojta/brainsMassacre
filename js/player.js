class Player {
  constructor(name) {
    this.name = name;
    this.startHealth = 100;
    this.health = this.startHealth;
    this.score = 0;
    this.audioFire = new Audio();
    this.audioHeal = new Audio();
    this.audioDie = new Audio();
  }

  drawPlayer() {
    document.querySelector(".player-name").innerHTML = this.name;
    this.drawHealth();
    this.createSounds();
  }

  drawHealth() {
    document.querySelector(".player-health__remain").style.width =
      (this.health / this.startHealth) * 100 + "%";
    document.querySelector(".player-health__remain").innerHTML = this.health;
  }

  createSounds() {
    this.audioFire.preload = "auto";
    this.audioFire.volume = 1;
    this.audioFire.src = "./audio/playerFire.mp3";
    this.audioHeal.preload = "auto";
    this.audioHeal.volume = 1;
    this.audioHeal.src = "./audio/playerHeal.mp3";
    this.audioDie.preload = "auto";
    this.audioDie.volume = 1;
    this.audioDie.src = "./audio/playerDie.mp3";
  }

  fire() {
    this.audioFire.play();
    document
      .querySelector(".sprite-player")
      .classList.remove("sprite-player__idle");
    document
      .querySelector(".sprite-player")
      .classList.add("sprite-player__fire");
  }

  stopFire() {
    document
      .querySelector(".sprite-player")
      .classList.remove("sprite-player__fire");
    document
      .querySelector(".sprite-player")
      .classList.add("sprite-player__idle");
  }

  healing() {
    this.audioHeal.play();
    document
      .querySelector(".sprite-player")
      .classList.remove("sprite-player__idle");
    document
      .querySelector(".sprite-player")
      .classList.add("sprite-player__heal");
  }

  stopHealing() {
    document
      .querySelector(".sprite-player")
      .classList.remove("sprite-player__heal");
    document
      .querySelector(".sprite-player")
      .classList.add("sprite-player__idle");
  }

  hurt() {
    document
      .querySelector(".sprite-player")
      .classList.remove("sprite-player__idle");
    document
      .querySelector(".sprite-player")
      .classList.add("sprite-player__hurt");
  }

  stopHurt() {
    document
      .querySelector(".sprite-player")
      .classList.remove("sprite-player__hurt");
    document
      .querySelector(".sprite-player")
      .classList.add("sprite-player__idle");
  }

  die() {
    this.audioDie.play();
    document
      .querySelector(".sprite-player")
      .classList.remove("sprite-player__idle");
    document
      .querySelector(".sprite-player")
      .classList.add("sprite-player__die");
  }

  isAlive() {
    return this.health > 0;
  }
}

export default Player;
