class Flappy {
  constructor() {
    this.w = 800;
    this.h = 448;
    this.ctx = undefined;
    this.intervalId = undefined;
    this.fps = 60;
    this.counter = 0;
    this.bgimg = new Image();
    this.bgimg.src = "images/bg.png";
    
  }

  init = (id) => {
    /** @type  CanvasRenderingContext2D  */
    this.ctx = id.getContext("2d");
    this.start();
  };

  start = () => {
    this.intervalId = setInterval(() => {
      this.clearScreen();
      this.draw();
      // this.drawObst();
      // this.listener();

      this.counter++;
    }, 1000 / this.fps);
  };

  draw = () => {
    this.drawBg()
  };


  drawBg = () =>{
    // let x = 0
    // let y = 0
    // let incr = 1.5
    // // this.ctx.save();
    
    // this.ctx.translate(x -= incr, 0)
    // this.ctx.drawImage(this.bgimg, x, y, this.w, this.h);
    // this.ctx.translate(x -= incr, 0)
    // this.ctx.drawImage(this.bgimg, x + this.w, 0, this.w, this.h);

    // // this.ctx.restore();
    // x -= incr
    // if (x < -this.w) x = 0;

    this.background = new gamebg (this.w, this.h);
    this.background.start()
    
    
  } 

  clearScreen = () => {
    this.ctx.clearRect(0,0,this.w,this.h);
  } 
}


class gamebg {
  constructor(w, h){
    this.canvasDOMEl = document.getElementById("flappyboard")
    this.ctx = undefined
    this.img = new Image();
    this.img.src = "images/bg.png";
    this.h = h
    this.w = w

    this.xx = 0
    
    this.y = 0;

    this.dx = 5;
    this.x = this.xx -= this.dx;
  } 

  start = () => {
    this.ctx = this.canvasDOMEl.getContext("2d")
    this.move()
    this.draw()
    this.x -= this.dx
   
  } 

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

  }

  move = () => {
    this.x -= this.dx;

    if (this.x < -this.w) this.x = 0;
  }
} 
