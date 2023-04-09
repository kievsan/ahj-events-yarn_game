export default class Score {
  constructor(elem) {
    this.elem = elem;
    this.infoMsg = elem.querySelector(".info .msg");
    this.infoMiss = elem.querySelector(".info .miss");
  }

  init() {
    this.msg = 0;
    this.miss = 0;

    this.elem.addEventListener("click", (e) => {
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
