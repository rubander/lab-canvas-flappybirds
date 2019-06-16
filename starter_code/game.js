class Flappy {
  constructor() {
    this.w = 800;

    this.h = 448;

    this.ctx = undefined;

    this.intervalId = undefined;

    this.fps = 60;

    this.counter = 0;

    this.negcounter = 0


    this.bgimg = new Image();

    this.bgimg.src = "images/bg.png";

    this.background = 0
    this.player = 0
    
  }
  startingPoint = () => {
    this.negcounter--
  }
  init = id => {
    /** @type  CanvasRenderingContext2D  */

    this.ctx = id.getContext("2d");

    this.start();
  };

  start = () => {
    this.intervalId = setInterval(() => {
      this.clearScreen();
      this.draw();
      this.negcounter-=1
      // this.drawObst();
      // this.listener();
      this.counter++;

    }, 1000 / this.fps);
  };

  draw = () => {
    this.drawBg();
    this.drawPlayer()
  };

  drawPlayer = () => {
    this.player = new Bird(this.ctx, this.w *0.06, this.h /4)
    this.player.update()
    this.player.newPos()
  }

  drawBg = () => {
    this.background = new gamebg(this.w, this.h, this.ctx, this.negcounter);
    this.background.start();
    if (this.negcounter < -this.w) {this.negcounter = 0;}
  };

  clearScreen = () => {
    this.ctx.clearRect(0, 0, this.w, this.h);
    // console.log("Mierda")
  };
}

var spaceKey = 38

setListeners = () => {
  document.onkeydown = function(event) {
    if (event.keyCode === spaceKey) {
      this.posX -= 5;
      this.speedX -= 10;
    }
  }
}