/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/score.js
class Score {
  constructor(elem) {
    this.elem = elem;
    this.infoMsg = elem.querySelector(".info .msg");
    this.infoMiss = elem.querySelector(".info .miss");
  }
  init() {
    this.msg = 0;
    this.miss = 0;
    this.elem.addEventListener("click", e => {
      const cell = e.target.closest(".grid-cell");
      if (cell) {
        const icon = cell.querySelector(".icon");
        if (icon) {
          this.hit();
          icon.remove();
        }
      }
    });
  }
  hit() {
    this.msg += 1;
    this.infoMsg.textContent = this.msg;
  }
  missed() {
    this.miss += 1;
    this.infoMiss.textContent = this.miss;
  }
}
;// CONCATENATED MODULE: ./src/js/init.js

class Character {
  constructor(elem) {
    this.cell = elem.querySelectorAll(".grid-cell");
    this.icon = elem.querySelector(".icon");
    this.game = new Score(elem);
  }
  init() {
    this.icon.remove();
    this.game.init();
    this.getRandomPosition();
  }
  getRandomPosition() {
    let previous = 0;
    let i = 0;
    const interval = setInterval(() => {
      while (i === previous) {
        i = Math.floor(Math.random() * (this.cell.length - 1));
      }
      if (this.cell[previous].querySelector(".icon")) {
        this.game.missed();
        if (this.game.miss === 5) {
          clearInterval(interval);
          alert("Вы проиграли!"); // eslint-disable-line no-alert
        }
      }

      previous = i;
      this.cell[i].appendChild(this.icon);
    }, 1000);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const Game = new Character(document.querySelector(".grid-container"));
Game.init();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map