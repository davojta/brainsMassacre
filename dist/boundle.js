/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = "./js/main.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./js/dict.js":
      /*!********************!*\
  !*** ./js/dict.js ***!
  \********************/
      /*! exports provided: dictMonster, dictTranslateTask, dictListeningTask, dictCapitalsTask, dictSortTask, dictRedundantTask, preloadImages */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "dictMonster",
          function() {
            return dictMonster;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "dictTranslateTask",
          function() {
            return dictTranslateTask;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "dictListeningTask",
          function() {
            return dictListeningTask;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "dictCapitalsTask",
          function() {
            return dictCapitalsTask;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "dictSortTask",
          function() {
            return dictSortTask;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "dictRedundantTask",
          function() {
            return dictRedundantTask;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "preloadImages",
          function() {
            return preloadImages;
          }
        );
        const dictMonster = {
          headsIdle: [
            "sprite-monster__head_idle_first",
            "sprite-monster__head_idle_second",
            "sprite-monster__head_idle_third"
          ],
          bodiesIdle: [
            "sprite-monster__body_idle_first",
            "sprite-monster__body_idle_second",
            "sprite-monster__body_idle_third"
          ],
          legsIdle: [
            "sprite-monster__legs_idle_first",
            "sprite-monster__legs_idle_second",
            "sprite-monster__legs_idle_third"
          ],
          headsFire: [
            "sprite-monster__head_fire_first",
            "sprite-monster__head_fire_second",
            "sprite-monster__head_fire_third"
          ],
          bodiesFire: [
            "sprite-monster__body_fire_first",
            "sprite-monster__body_fire_second",
            "sprite-monster__body_fire_third"
          ],
          legsFire: [
            "sprite-monster__legs_fire_first",
            "sprite-monster__legs_fire_second",
            "sprite-monster__legs_fire_third"
          ],
          headsHurt: [
            "sprite-monster__head_hurt_first",
            "sprite-monster__head_hurt_second",
            "sprite-monster__head_hurt_third"
          ],
          bodiesHurt: [
            "sprite-monster__body_hurt_first",
            "sprite-monster__body_hurt_second",
            "sprite-monster__body_hurt_third"
          ],
          legsHurt: [
            "sprite-monster__legs_hurt_first",
            "sprite-monster__legs_hurt_second",
            "sprite-monster__legs_hurt_third"
          ],
          headsDie: [
            "sprite-monster__head_die_first",
            "sprite-monster__head_die_second",
            "sprite-monster__head_die_third"
          ],
          bodiesDie: [
            "sprite-monster__body_die_first",
            "sprite-monster__body_die_second",
            "sprite-monster__body_die_third"
          ],
          legsDie: [
            "sprite-monster__legs_die_first",
            "sprite-monster__legs_die_second",
            "sprite-monster__legs_die_third"
          ],

          firstNames: [
            "Kazimir",
            "Voiclah",
            "Magamed",
            "Ludovik",
            "Genrich",
            "Sigizmund",
            "Aslanbek",
            "Bzdashek",
            "Ernest",
            "Gans",
            "Givi",
            "Zayceslav"
          ],
          secondNames: [
            '"Hriply"',
            '"Shavka"',
            '"Bambula"',
            '"Baklan"',
            '"Brodyaga"',
            '"Vertuhai"',
            '"Aristocrat"',
            '"Lentyai"',
            '"Babusya"'
          ],
          thirdNames: [
            "Vonuchkin",
            "Svininsky",
            "Zhirnidze",
            "Kakulko",
            "Soplivkin",
            "Gryaznulenko",
            "Potnyakovich",
            "Zaperdyak",
            "Suhozad",
            "Tryapkin",
            "Zapadlovsky"
          ],

          backgroundImages: ["arena_1", "arena_2", "arena_3", "arena_4"]
        };

        const dictTranslateTask = {
          dog: ["собака", "пес", "пёс"],
          cat: ["кот", "кошка", "котэ"],
          house: ["дом"],
          spell: ["заклинание", "чары"],
          pig: ["свинья", "поросенок", "поросёнок", "хрюшка"],
          bird: ["птица"],
          towel: ["полотенце"],
          table: ["стол", "таблица"],
          flower: ["цветок", "цвет"]
        };

        const dictListeningTask = {
          "audio/listeningTask/elephant.mp3": "elephant",
          "audio/listeningTask/forest.mp3": "forest",
          "audio/listeningTask/mushroom.mp3": "mushroom",
          "audio/listeningTask/ocean.mp3": "ocean",
          "audio/listeningTask/rainbow.mp3": "rainbow",
          "audio/listeningTask/strawberry.mp3": "strawberry",
          "audio/listeningTask/tomato.mp3": "tomato"
        };

        const dictCapitalsTask = {
          "img/capitalstask/spain.jpg": ["madrid"],
          "img/capitalstask/belarus.jpeg": ["minsk"],
          "img/capitalstask/canada.jpg": ["ottawa", "ottava"],
          "img/capitalstask/germany.jpg": ["berlin"],
          "img/capitalstask/greatbritain.jpg": ["london"],
          "img/capitalstask/italy.jpg": ["rome", "rim"],
          "img/capitalstask/lithuania.jpg": ["vilnius", "vilnus"],
          "img/capitalstask/sweden.jpg": ["stockholm", "stokholm", "stokgolm"],
          "img/capitalstask/usa.png": ["washington"]
        };

        const dictSortTask = {
          wolf: ["wolf", "flow"],
          bisycle: ["bisycle"],
          clothes: ["clothes"],
          apple: ["apple"],
          violet: ["violet"],
          coffee: ["coffee"],
          market: ["market"],
          mirror: ["mirror"],
          rabbit: ["rabbit"]
        };

        const dictRedundantTask = {
          "img/capitalstask/canada.jpg": [
            "img/capitalstask/canada.jpg",
            "img/capitalstask/spain.jpg",
            "img/capitalstask/italy.jpg"
          ],
          "img/redudanttask/elephant.jpg": [
            "img/redudanttask/bear.jpg",
            "img/redudanttask/lion.jpg",
            "img/redudanttask/elephant.jpg"
          ],
          "img/redudanttask/cucumber.jpg": [
            "img/redudanttask/cucumber.jpg",
            "img/redudanttask/oranges.jpg",
            "img/redudanttask/pears.jpg"
          ],
          "img/redudanttask/lada.jpg": [
            "img/redudanttask/mersedes.jpg",
            "img/redudanttask/ferrari.jpg",
            "img/redudanttask/lada.jpg"
          ],
          "img/redudanttask/sinica.jpg": [
            "img/redudanttask/ostrich.jpg",
            "img/redudanttask/sinica.jpg",
            "img/redudanttask/pinguin.jpg"
          ]
        };

        const preloadImages = [
          "./img/arena1.jpg",
          "./img/arena2.png",
          "./img/arena3.png",
          "./img/arena4.png",
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
          "./img/redudanttask/sinica.jpg"
        ];

        /***/
      },

    /***/ "./js/game.js":
      /*!********************!*\
  !*** ./js/game.js ***!
  \********************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./player */ "./js/player.js"
        );
        /* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./monster */ "./js/monster.js"
        );
        /* harmony import */ var _spell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./spell */ "./js/spell.js"
        );
        /* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./mylib */ "./js/mylib.js"
        );
        /* harmony import */ var _dict__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./dict */ "./js/dict.js"
        );

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

            this.player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](
              playerName
            );
            this.player.drawPlayer();

            this.monster = new _monster__WEBPACK_IMPORTED_MODULE_1__["default"](
              this.player.score
            );
            this.monster.drawMonster(this.player);

            this.spell = new _spell__WEBPACK_IMPORTED_MODULE_2__["default"]();
            this.btnChooseSpell = this.spell.open.bind(this.spell);
            document
              .getElementById("btn-choose-spell")
              .addEventListener("click", this.btnChooseSpell);
            document
              .querySelector(".modal-window__spell")
              .addEventListener("click", () => {
                this.spell.chooseSpell(event);
              });
            document
              .getElementById("btn-answer")
              .addEventListener("click", () => {
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
            this.spell.task.answer = document
              .getElementById("answer")
              .value.toString();
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
            document.getElementById("answer").style.display = "inline-block";
          }

          setRedudantAnswer() {
            const arrayOfInputs = document.querySelectorAll(
              'input[type="radio"]'
            );
            const chosenInput = Array.prototype.filter.call(
              arrayOfInputs,
              i => i.checked
            )[0];
            if (chosenInput === undefined) {
              document.getElementById("answer").style.display = "inline-block";
              return false;
            }
            document.getElementById("answer").value = chosenInput.value;
            document.getElementById("answer").style.display = "inline-block";
          }

          isAlive() {
            if (!this.monster.isAlive()) {
              this.monster.die();
              setTimeout(() => this.monster.stopDie(), 1999);
              setTimeout(() => this.nextMonster(), 2000);
            } else if (!this.player.isAlive()) {
              this.player.die();
              setTimeout(() => this.finish(), 3000);
            } else {
              document
                .getElementById("btn-choose-spell")
                .addEventListener("click", this.btnChooseSpell);
            }
          }

          nextMonster() {
            const spriteMonster = document.querySelector(".sprite-monster");
            spriteMonster.children[0].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_4__["dictMonster"].headsIdle[
                this.monster.head
              ]
            );
            spriteMonster.children[1].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_4__["dictMonster"].bodiesIdle[
                this.monster.body
              ]
            );
            spriteMonster.children[2].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_4__["dictMonster"].legsIdle[
                this.monster.legs
              ]
            );

            this.player.score += 1;
            this.monster = new _monster__WEBPACK_IMPORTED_MODULE_1__["default"](
              this.player.score
            );
            this.monster.drawMonster(this.player);
            this.player.health = Math.min(
              this.player.health +
                _mylib__WEBPACK_IMPORTED_MODULE_3__["default"].getRandomFromTo(
                  10,
                  15 + this.player.score
                ),
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
            _mylib__WEBPACK_IMPORTED_MODULE_3__[
              "default"
            ].createHighscoresTable();
          }
        }

        /* harmony default export */ __webpack_exports__["default"] = Game;

        /***/
      },

    /***/ "./js/main.js":
      /*!********************!*\
  !*** ./js/main.js ***!
  \********************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./game.js */ "./js/game.js"
        );
        /* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./mylib */ "./js/mylib.js"
        );
        /* harmony import */ var _dict__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./dict */ "./js/dict.js"
        );

        let game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        let myGame = game.create.bind(game);

        _mylib__WEBPACK_IMPORTED_MODULE_1__["default"].preload(
          _dict__WEBPACK_IMPORTED_MODULE_2__["preloadImages"]
        );
        window.onload = function() {
          document.querySelector(".loading-page").style.display = "none";
          document.querySelector(".reg-page").style.display = "block";
        };

        document
          .getElementById("reg-form")
          .addEventListener("submit", event => {
            event.preventDefault();
            _mylib__WEBPACK_IMPORTED_MODULE_1__["default"].validateForm(
              "player-name",
              myGame
            );
          });

        /*let audio = new Audio();
audio.volume = 0.1;
audio.src = "./audio/soundtrack.mp3";
audio.autoplay = true;
audio.loop = true;*/

        /***/
      },

    /***/ "./js/monster.js":
      /*!***********************!*\
  !*** ./js/monster.js ***!
  \***********************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./mylib */ "./js/mylib.js"
        );
        /* harmony import */ var _dict__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./dict */ "./js/dict.js"
        );

        class Monster {
          constructor(score) {
            this.score = score;
            this.name = Monster.generateName();
            this.startHealth = Monster.generateHealth(this.score);
            this.health = this.startHealth;
            this.head;
            this.body;
            this.legs;
            this.audioFire = new Audio();
            this.audioGrenadePin = new Audio();
            this.audioGrenade = new Audio();
          }

          drawMonster() {
            document.querySelector(".monster-name").innerHTML = this.name;
            document.querySelector(".round").innerHTML =
              "round " + (this.score + 1);
            this.drawHealth();
            this.createSounds();

            /*add new background and clear the previous*/
            document
              .querySelector(".game-page")
              .classList.add(
                _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"]
                  .backgroundImages[
                  this.score %
                    _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"]
                      .backgroundImages.length
                ]
              );
            document
              .querySelector(".game-page")
              .classList.remove(
                _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"]
                  .backgroundImages[
                  (this.score - 1) %
                    _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"]
                      .backgroundImages.length
                ]
              );

            /*get random numbers to take head, body, legs from dictionary by these numbers */
            this.head = _mylib__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].getRandomFromTo(
              0,
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].headsIdle
                .length - 1
            );
            this.body = _mylib__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].getRandomFromTo(
              0,
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].bodiesIdle
                .length - 1
            );
            this.legs = _mylib__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].getRandomFromTo(
              0,
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].legsIdle
                .length - 1
            );

            /*draw the monster from taken head, body and legs*/
            document
              .querySelector(".sprite-monster__head_idle")
              .classList.add(
                _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].headsIdle[
                  this.head
                ]
              );
            document
              .querySelector(".sprite-monster__body_idle")
              .classList.add(
                _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].bodiesIdle[
                  this.body
                ]
              );
            document
              .querySelector(".sprite-monster__legs_idle")
              .classList.add(
                _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].legsIdle[
                  this.legs
                ]
              );
          }

          /*sets the green line of health and puts a number of health in html*/
          drawHealth() {
            document.querySelector(".monster-health__remain").style.width =
              (this.health / this.startHealth) * 100 + "%";
            document.querySelector(
              ".monster-health__remain"
            ).innerHTML = this.health;
          }

          createSounds() {
            this.audioFire.preload = "auto";
            this.audioFire.volume = 1;
            this.audioFire.src = "./audio/monsterFire.mp3";
            this.audioGrenade.preload = "auto";
            this.audioGrenade.volume = 1;
            this.audioGrenade.src = "./audio/grenade.mp3";
            this.audioGrenadePin.preload = "auto";
            this.audioGrenadePin.volume = 1;
            this.audioGrenadePin.src = "./audio/grenade0.mp3";
          }

          /*removes classes of idle parts of the monster and sets classes of fire parts of the monster*/
          fire() {
            this.audioFire.play();
            const spriteMonster = document.querySelector(".sprite-monster");
            spriteMonster.children[0].classList.remove(
              "sprite-monster__head_idle"
            );
            spriteMonster.children[0].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].headsIdle[
                this.head
              ]
            );
            spriteMonster.children[1].classList.remove(
              "sprite-monster__body_idle"
            );
            spriteMonster.children[1].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].bodiesIdle[
                this.body
              ]
            );
            spriteMonster.children[2].classList.remove(
              "sprite-monster__legs_idle"
            );
            spriteMonster.children[2].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].legsIdle[
                this.legs
              ]
            );
            spriteMonster.children[0].classList.add(
              "sprite-monster__head_fire"
            );
            spriteMonster.children[0].classList.add(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].headsFire[
                this.head
              ]
            );
            spriteMonster.children[1].classList.add(
              "sprite-monster__body_fire"
            );
            spriteMonster.children[1].classList.add(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].bodiesFire[
                this.body
              ]
            );
            spriteMonster.children[2].classList.add(
              "sprite-monster__legs_fire"
            );
            spriteMonster.children[2].classList.add(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].legsFire[
                this.legs
              ]
            );
          }

          /*removes classes of fire parts of the monster and sets classes of idle parts of the monster*/
          stopFire() {
            const spriteMonster = document.querySelector(".sprite-monster");
            spriteMonster.children[0].classList.remove(
              "sprite-monster__head_fire"
            );
            spriteMonster.children[0].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].headsFire[
                this.head
              ]
            );
            spriteMonster.children[1].classList.remove(
              "sprite-monster__body_fire"
            );
            spriteMonster.children[1].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].bodiesFire[
                this.body
              ]
            );
            spriteMonster.children[2].classList.remove(
              "sprite-monster__legs_fire"
            );
            spriteMonster.children[2].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].legsFire[
                this.legs
              ]
            );
            spriteMonster.children[0].classList.add(
              "sprite-monster__head_idle"
            );
            spriteMonster.children[0].classList.add(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].headsIdle[
                this.head
              ]
            );
            spriteMonster.children[1].classList.add(
              "sprite-monster__body_idle"
            );
            spriteMonster.children[1].classList.add(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].bodiesIdle[
                this.body
              ]
            );
            spriteMonster.children[2].classList.add(
              "sprite-monster__legs_idle"
            );
            spriteMonster.children[2].classList.add(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].legsIdle[
                this.legs
              ]
            );
          }

          /*removes classes of idle parts of the monster and sets classes of hurt parts of the monster*/
          hurt() {
            const spriteMonster = document.querySelector(".sprite-monster");
            spriteMonster.children[0].classList.remove(
              "sprite-monster__head_idle"
            );
            spriteMonster.children[0].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].headsIdle[
                this.head
              ]
            );
            spriteMonster.children[1].classList.remove(
              "sprite-monster__body_idle"
            );
            spriteMonster.children[1].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].bodiesIdle[
                this.body
              ]
            );
            spriteMonster.children[2].classList.remove(
              "sprite-monster__legs_idle"
            );
            spriteMonster.children[2].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].legsIdle[
                this.legs
              ]
            );
            spriteMonster.children[0].classList.add(
              "sprite-monster__head_hurt"
            );
            spriteMonster.children[0].classList.add(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].headsHurt[
                this.head
              ]
            );
            spriteMonster.children[1].classList.add(
              "sprite-monster__body_hurt"
            );
            spriteMonster.children[1].classList.add(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].bodiesHurt[
                this.body
              ]
            );
            spriteMonster.children[2].classList.add(
              "sprite-monster__legs_hurt"
            );
            spriteMonster.children[2].classList.add(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].legsHurt[
                this.legs
              ]
            );
          }

          /*removes classes of hurt parts of the monster and sets classes of idle parts of the monster*/
          stopHurt() {
            const spriteMonster = document.querySelector(".sprite-monster");
            spriteMonster.children[0].classList.remove(
              "sprite-monster__head_hurt"
            );
            spriteMonster.children[0].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].headsHurt[
                this.head
              ]
            );
            spriteMonster.children[1].classList.remove(
              "sprite-monster__body_hurt"
            );
            spriteMonster.children[1].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].bodiesHurt[
                this.body
              ]
            );
            spriteMonster.children[2].classList.remove(
              "sprite-monster__legs_hurt"
            );
            spriteMonster.children[2].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].legsHurt[
                this.legs
              ]
            );
            spriteMonster.children[0].classList.add(
              "sprite-monster__head_idle"
            );
            spriteMonster.children[0].classList.add(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].headsIdle[
                this.head
              ]
            );
            spriteMonster.children[1].classList.add(
              "sprite-monster__body_idle"
            );
            spriteMonster.children[1].classList.add(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].bodiesIdle[
                this.body
              ]
            );
            spriteMonster.children[2].classList.add(
              "sprite-monster__legs_idle"
            );
            spriteMonster.children[2].classList.add(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].legsIdle[
                this.legs
              ]
            );
          }

          die() {
            setTimeout(() => {
              this.audioGrenadePin.play();
            }, 130);
            setTimeout(() => {
              this.audioGrenade.play();
            }, 400);
            const spriteMonster = document.querySelector(".sprite-monster");
            spriteMonster.children[0].classList.remove(
              "sprite-monster__head_idle"
            );
            spriteMonster.children[0].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].headsIdle[
                this.head
              ]
            );
            spriteMonster.children[1].classList.remove(
              "sprite-monster__body_idle"
            );
            spriteMonster.children[1].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].bodiesIdle[
                this.body
              ]
            );
            spriteMonster.children[2].classList.remove(
              "sprite-monster__legs_idle"
            );
            spriteMonster.children[2].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].legsIdle[
                this.legs
              ]
            );
            spriteMonster.children[0].classList.add("sprite-monster__head_die");
            spriteMonster.children[0].classList.add(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].headsDie[
                this.head
              ]
            );
            spriteMonster.children[1].classList.add("sprite-monster__body_die");
            spriteMonster.children[1].classList.add(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].bodiesDie[
                this.body
              ]
            );
            spriteMonster.children[2].classList.add("sprite-monster__legs_die");
            spriteMonster.children[2].classList.add(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].legsDie[
                this.legs
              ]
            );
          }

          stopDie() {
            const spriteMonster = document.querySelector(".sprite-monster");
            spriteMonster.children[0].classList.remove(
              "sprite-monster__head_die"
            );
            spriteMonster.children[0].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].headsDie[
                this.head
              ]
            );
            spriteMonster.children[1].classList.remove(
              "sprite-monster__body_die"
            );
            spriteMonster.children[1].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].bodiesDie[
                this.body
              ]
            );
            spriteMonster.children[2].classList.remove(
              "sprite-monster__legs_die"
            );
            spriteMonster.children[2].classList.remove(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].legsDie[
                this.legs
              ]
            );
            spriteMonster.children[0].classList.add(
              "sprite-monster__head_idle"
            );
            spriteMonster.children[0].classList.add(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].headsIdle[
                this.head
              ]
            );
            spriteMonster.children[1].classList.add(
              "sprite-monster__body_idle"
            );
            spriteMonster.children[1].classList.add(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].bodiesIdle[
                this.body
              ]
            );
            spriteMonster.children[2].classList.add(
              "sprite-monster__legs_idle"
            );
            spriteMonster.children[2].classList.add(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].legsIdle[
                this.legs
              ]
            );
          }

          /*checks if the monster is alive*/
          isAlive() {
            return this.health > 0;
          }

          /*generates the monster's name from three parts*/
          static generateName() {
            const chosenFirstName = _mylib__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].getRandomArrayElement(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].firstNames
            );
            const chosenSecondName = _mylib__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].getRandomArrayElement(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].secondNames
            );
            const chosenThirdName = _mylib__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].getRandomArrayElement(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictMonster"].thirdNames
            );
            return (
              chosenFirstName + " " + chosenSecondName + " " + chosenThirdName
            );
          }

          /*generates the monster's health depending on the level*/
          static generateHealth(score) {
            return (
              30 +
              score * 10 +
              _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomFromTo(
                0,
                10
              )
            );
          }
        }

        /* harmony default export */ __webpack_exports__["default"] = Monster;

        /***/
      },

    /***/ "./js/mylib.js":
      /*!*********************!*\
  !*** ./js/mylib.js ***!
  \*********************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        class mylib {
          /*returns a random element of the passed array*/
          static getRandomArrayElement(array) {
            return array[Math.floor(Math.random() * array.length)];
          }

          /*returns a random integer from a gap between min and max*/
          static getRandomFromTo(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }

          /*draws a table with highscores*/
          static createHighscoresTable() {
            let recordsArray = mylib.getHighscores();
            let recordsTable = document.querySelector("table");
            for (let i = 0; i < recordsArray.length; i++) {
              let tableRow = document.createElement("tr");
              let playerName = document.createElement("td");
              let playerScore = document.createElement("td");
              playerName.innerText = recordsArray[i][0];
              playerScore.innerText = recordsArray[i][1];
              tableRow.appendChild(playerName);
              tableRow.appendChild(playerScore);
              recordsTable.appendChild(tableRow);
            }
          }

          /*returns a sorted array of 10 top scores*/
          static getHighscores() {
            let allScores = [];
            let storageCount = localStorage.length;
            for (let i = 0; i < storageCount; i++) {
              if (localStorage.key(i).substr(0, 4) === "game") {
                allScores.push(
                  localStorage.getItem(localStorage.key(i)).split(",")
                );
              }
            }
            for (let i = 0; i < allScores.length; i++) {
              allScores[i][1] = Number(allScores[i][1]);
            }
            allScores = mylib.bubbleSort2D(allScores).slice(0, 10);
            return allScores;
          }

          /*bubble sort for two-dimensional array*/
          static bubbleSort2D(array) {
            let length = array.length;
            for (let i = 0; i < length - 1; i++) {
              for (let j = 0; j < length - 1 - i; j++) {
                if (array[j + 1][1] > array[j][1]) {
                  let t = array[j + 1];
                  array[j + 1] = array[j];
                  array[j] = t;
                }
              }
            }
            return array;
          }

          /*shuffles elements in array*/
          static shuffle(array) {
            let currentIndex = array.length;
            let tempValue;
            let randIndex;
            while (0 !== currentIndex) {
              randIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
              tempValue = array[currentIndex];
              array[currentIndex] = array[randIndex];
              array[randIndex] = tempValue;
            }
            return array;
          }

          static validateForm(id, func) {
            const name = document.getElementById(id).value;
            if (name !== "") {
              func();
            }
          }

          static preload(arr) {
            let images = new Array();
            for (let i = 0; i < arr.length; i++) {
              images[i] = new Image();
              images[i].src = arr[i];
            }
          }
        }

        /* harmony default export */ __webpack_exports__["default"] = mylib;

        /***/
      },

    /***/ "./js/player.js":
      /*!**********************!*\
  !*** ./js/player.js ***!
  \**********************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        class Player {
          constructor(name) {
            this.name = name;
            this.startHealth = 100;
            this.health = this.startHealth;
            this.score = 0;
            this.audioFire = new Audio();
            this.audioHeal = new Audio();
          }

          drawPlayer() {
            document.querySelector(".player-name").innerHTML = this.name;
            this.drawHealth();
            this.createSounds();
          }

          drawHealth() {
            document.querySelector(".player-health__remain").style.width =
              (this.health / this.startHealth) * 100 + "%";
            document.querySelector(
              ".player-health__remain"
            ).innerHTML = this.health;
          }

          createSounds() {
            this.audioFire.preload = "auto";
            this.audioFire.volume = 1;
            this.audioFire.src = "./audio/playerFire.mp3";
            this.audioHeal.preload = "auto";
            this.audioHeal.volume = 1;
            this.audioHeal.src = "./audio/playerHeal.mp3";
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

        /* harmony default export */ __webpack_exports__["default"] = Player;

        /***/
      },

    /***/ "./js/spell.js":
      /*!*********************!*\
  !*** ./js/spell.js ***!
  \*********************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./task */ "./js/task.js"
        );
        /* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./mylib */ "./js/mylib.js"
        );

        class Spell {
          constructor() {
            this.kind;
            this.task;
          }

          /*opens window with choise of spell type*/
          open() {
            document.querySelector(".spell-page").style.display = "block";
          }

          /*sets the chosen spell type into object's property and creates a task*/
          chooseSpell(event) {
            this.kind = event.target.getAttribute("id");
            document.querySelector(".spell-page").style.display = "none";
            document.querySelector(".task-page").style.display = "block";
            this.task = new _task__WEBPACK_IMPORTED_MODULE_0__["default"]();
            this.task.generate();
          }

          /*if the chosen type of spell was "atack", the player atacks the monster or the monster atacks the player */
          atack(atacking, atacked) {
            atacked.health = Math.max(
              atacked.health -
                _mylib__WEBPACK_IMPORTED_MODULE_1__["default"].getRandomFromTo(
                  20,
                  25 + atacked.score
                ),
              0
            );
            atacked.drawHealth();
            atacking.fire();
            atacked.hurt();
            setTimeout(atacking.stopFire.bind(atacking), 2000);
            setTimeout(atacked.stopHurt.bind(atacked), 2000);
          }

          /*if the chosen type of spell was "heal" the player healing himself*/
          heal(player) {
            player.health = Math.min(
              player.health +
                _mylib__WEBPACK_IMPORTED_MODULE_1__["default"].getRandomFromTo(
                  20,
                  25 + player.score * 5
                ),
              player.startHealth
            );
            player.drawHealth();
            player.healing();
            setTimeout(player.stopHealing, 2000);
          }

          cast(player, monster) {
            switch (this.kind) {
              case "atack-spell":
                this.task.isSolved()
                  ? this.atack(player, monster)
                  : this.atack(monster, player);
                break;
              case "heal-spell":
                this.task.isSolved()
                  ? this.heal(player)
                  : this.atack(monster, player);
                break;
              default:
                null;
            }
          }
        }

        /* harmony default export */ __webpack_exports__["default"] = Spell;

        /***/
      },

    /***/ "./js/task.js":
      /*!********************!*\
  !*** ./js/task.js ***!
  \********************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _mylib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./mylib */ "./js/mylib.js"
        );
        /* harmony import */ var _dict__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./dict */ "./js/dict.js"
        );

        class Task {
          constructor() {
            this.type;
            this.condition;
            this.solution = [];
            this.answer;
          }

          generate() {
            document.querySelector(".modal-window__task_media").innerHTML = "";
            document.getElementById("answer").value = "";
            const tasks = [
              this.arithmetics,
              this.translate,
              this.listening,
              this.capitals,
              this.sort,
              this.redundant,
              this.equation
            ];
            const currentTask = _mylib__WEBPACK_IMPORTED_MODULE_0__["default"]
              .getRandomArrayElement(tasks)
              .bind(this);
            currentTask();
          }

          arithmetics() {
            this.type = "arithmetics";
            let firstNumber;
            let secondNumber;
            const operations = ["+", "-", "*", "/"];
            const operation = _mylib__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].getRandomArrayElement(operations);
            if (operation === "/") {
              const RandNumber = _mylib__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ].getRandomFromTo(1, 15);
              secondNumber = _mylib__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ].getRandomFromTo(1, 15);
              firstNumber = RandNumber * secondNumber;
            } else if (operation === "*") {
              firstNumber = _mylib__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ].getRandomFromTo(0, 30);
              secondNumber = _mylib__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ].getRandomFromTo(0, 30);
            } else {
              firstNumber = _mylib__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ].getRandomFromTo(0, 100);
              secondNumber = _mylib__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ].getRandomFromTo(0, 100);
            }
            this.condition = firstNumber + operation + secondNumber;
            this.solution.push(eval(this.condition).toString());
            document.querySelector(
              ".modal-window__task_description"
            ).innerHTML =
              "solve the task:<br>" + this.condition;
          }

          translate() {
            this.type = "translate";
            const arrayOfWords = Object.keys(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictTranslateTask"]
            );
            const arrayOfWordsLength = arrayOfWords.length;
            this.condition =
              arrayOfWords[
                _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomFromTo(
                  0,
                  arrayOfWordsLength - 1
                )
              ];
            this.solution =
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictTranslateTask"][
                this.condition
              ];

            document.querySelector(
              ".modal-window__task_description"
            ).innerHTML =
              "translate into russian:<br>" + this.condition;
          }

          listening() {
            this.type = "listening";
            const arrayOfWords = Object.keys(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictListeningTask"]
            );
            const arrayOfWordsLength = arrayOfWords.length;
            this.condition =
              arrayOfWords[
                _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomFromTo(
                  0,
                  arrayOfWordsLength - 1
                )
              ];
            this.solution.push(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictListeningTask"][
                this.condition
              ]
            );

            const insertingAudio = document.createElement("audio");
            insertingAudio.setAttribute("src", this.condition);
            insertingAudio.setAttribute("controls", "");
            document
              .querySelector(".modal-window__task_media")
              .appendChild(insertingAudio);
            document.querySelector(
              ".modal-window__task_description"
            ).innerHTML =
              "type the word you heard";
          }

          capitals() {
            this.type = "capitals";
            const arrayOfWords = Object.keys(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictCapitalsTask"]
            );
            const arrayOfWordsLength = arrayOfWords.length;
            this.condition =
              arrayOfWords[
                _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomFromTo(
                  0,
                  arrayOfWordsLength - 1
                )
              ];
            this.solution =
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictCapitalsTask"][
                this.condition
              ];

            const insertingFlag = document.createElement("img");
            insertingFlag.setAttribute("src", this.condition);
            document
              .querySelector(".modal-window__task_media")
              .appendChild(insertingFlag);
            document.querySelector(
              ".modal-window__task_description"
            ).innerHTML =
              "what is the capital of:";
          }

          sort() {
            this.type = "sort";
            document.getElementById("answer").style.display = "none";

            const arrayOfWords = Object.keys(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictSortTask"]
            );
            const arrayOfWordsLength = arrayOfWords.length;
            this.condition =
              arrayOfWords[
                _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomFromTo(
                  0,
                  arrayOfWordsLength - 1
                )
              ];
            this.solution =
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictSortTask"][
                this.condition
              ];

            const chosenWordShuffledArr = _mylib__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].shuffle(this.condition.split(""));

            const ul = document.createElement("ul");
            ul.classList.add("sortable");

            for (let i = 0; i < chosenWordShuffledArr.length; i++) {
              const li = document.createElement("li");
              li.innerHTML = chosenWordShuffledArr[i];
              ul.appendChild(li);
            }

            document.querySelector(".modal-window__task_media").appendChild(ul);

            $(function() {
              $(".sortable")
                .sortable()
                .disableSelection();
            });

            document.querySelector(
              ".modal-window__task_description"
            ).innerHTML =
              "put the letters in the correct order:";
          }

          redundant() {
            this.type = "redundant";
            document.getElementById("answer").style.display = "none";

            const arrayOfWords = Object.keys(
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictRedundantTask"]
            );
            const arrayOfWordsLength = arrayOfWords.length;
            this.solution.push(
              arrayOfWords[
                _mylib__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomFromTo(
                  0,
                  arrayOfWordsLength - 1
                )
              ]
            );
            this.condition =
              _dict__WEBPACK_IMPORTED_MODULE_1__["dictRedundantTask"][
                this.solution
              ];

            const media = document.querySelector(".modal-window__task_media");
            for (let i = 0; i < 3; i++) {
              const label = document.createElement("label");
              const input = document.createElement("input");
              input.setAttribute("type", "radio");
              input.setAttribute("name", "redundantPic");
              input.setAttribute("value", this.condition[i]);
              const img = document.createElement("img");
              img.setAttribute("src", this.condition[i]);
              label.appendChild(input);
              label.appendChild(img);
              media.appendChild(label);
            }

            document.querySelector(
              ".modal-window__task_description"
            ).innerHTML =
              "choose the redundant picture:";
          }

          equation() {
            this.type = "equation";

            const apple = document.createElement("img");
            const banana = document.createElement("img");
            const coconut = document.createElement("img");

            const appleValue = _mylib__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].getRandomFromTo(2, 10);
            const bananaValue = _mylib__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].getRandomFromTo(2, 10);
            const coconutValue = _mylib__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ].getRandomFromTo(2, 10);

            apple.setAttribute("src", "img/equationTask/apple.png");
            banana.setAttribute("src", "img/equationTask/banana.png");
            coconut.setAttribute("src", "img/equationTask/coconut.png");

            const plus = document.createElement("h3");
            const minus = document.createElement("h3");
            plus.innerText = " + ";
            minus.innerText = " - ";

            const firstResult = document.createElement("h3");
            const secondResult = document.createElement("h3");
            const thirdResult = document.createElement("h3");
            const fourthResult = document.createElement("h3");

            firstResult.innerText = ` = ${appleValue * 3}`;
            secondResult.innerText = ` = ${appleValue + bananaValue * 2}`;
            thirdResult.innerText = ` = ${bananaValue - coconutValue}`;
            fourthResult.innerText = ` = ?`;

            const firstRow = document.createElement("div");
            firstRow.classList.add("equation-row");
            const secondRow = firstRow.cloneNode();
            const thirdRow = firstRow.cloneNode();
            const fourthRow = firstRow.cloneNode();

            firstRow.appendChild(apple.cloneNode(true));
            firstRow.appendChild(plus.cloneNode(true));
            firstRow.appendChild(apple.cloneNode(true));
            firstRow.appendChild(plus.cloneNode(true));
            firstRow.appendChild(apple.cloneNode(true));
            firstRow.appendChild(firstResult);

            secondRow.appendChild(apple.cloneNode(true));
            secondRow.appendChild(plus.cloneNode(true));
            secondRow.appendChild(banana.cloneNode(true));
            secondRow.appendChild(plus.cloneNode(true));
            secondRow.appendChild(banana.cloneNode(true));
            secondRow.appendChild(secondResult);

            thirdRow.appendChild(banana.cloneNode(true));
            thirdRow.appendChild(minus.cloneNode(true));
            thirdRow.appendChild(coconut.cloneNode(true));
            thirdRow.appendChild(thirdResult);

            fourthRow.appendChild(apple.cloneNode(true));
            fourthRow.appendChild(plus.cloneNode(true));
            fourthRow.appendChild(banana.cloneNode(true));
            fourthRow.appendChild(plus.cloneNode(true));
            fourthRow.appendChild(coconut.cloneNode(true));
            fourthRow.appendChild(fourthResult);

            const media = document.querySelector(".modal-window__task_media");
            media.appendChild(firstRow);
            media.appendChild(secondRow);
            media.appendChild(thirdRow);
            media.appendChild(fourthRow);

            this.solution.push(String(appleValue + bananaValue + coconutValue));

            document.querySelector(
              ".modal-window__task_description"
            ).innerHTML =
              "solve the equation:";
          }

          isSolved() {
            return this.solution.includes(this.answer.toLowerCase());
          }
        }

        /* harmony default export */ __webpack_exports__["default"] = Task;

        /***/
      }

    /******/
  }
);
//# sourceMappingURL=boundle.js.map
