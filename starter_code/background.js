class gamebg {
  constructor(w, h, ctx, x) {
    this.canvasDOMEl = document.getElementById("flappyboard");

    this.ctx = ctx;

    this.img = new Image();

    this.img.src = "images/bg.png";

    this.h = h;

    this.w = w;

    this.x = x;

    this.y = 0;
  }

  start = () => {
    this.ctx = this.canvasDOMEl.getContext("2d");
    this.draw();
  };

  draw = () => {
    this.ctx.drawImage(
      this.img,

      this.x,

      this.y,

      this.w,

      this.h
    );
    this.ctx.drawImage(
      this.img,

      this.x + this.w,

      this.y,

      this.w,

      this.h
    );
  };
}
