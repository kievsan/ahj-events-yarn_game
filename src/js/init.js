import Score from "./score";

export default class Character {
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
