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

  init = id => {
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
    let x = 0
    let y = 0
    let incr = 1.5
    // this.ctx.save();
    
    this.ctx.translate(x -= incr, 0)
    this.ctx.drawImage(this.bgimg, x, y, this.w, this.h);
    this.ctx.translate(x -= incr, 0)
    this.ctx.drawImage(this.bgimg, x + this.w, 0, this.w, this.h);

    // this.ctx.restore();
    x -= incr
    if (x < -this.w) x = 0;

    // new Background = (this.w, this.h, this.ctx);
    // this.background.draw()
    // this.background.move()
    
  } 

  clearScreen = () => {
    this.ctx.clearRect(0,0,this.w,this.h);
  } 
}


// class Background{
//   constructor(w, h, ctx){
//     this.ctx = id.getContext("2d");
//     this.img = new Image();
//     this.img.src = "images/bg.png";
//     this.h = 448
//     this.w = 800

//     this.x = 0;
//     this.y = 0;

//     this.dx = 10;
//   } 

//   start = () =>{
//     this.draw()
//     this.move()
//   } 

//   draw = () => {
//     this.ctx.drawImage(
//       this.img,
//       this.x,
//       this.y,
//       this.w,
//       this.h
//     );
//     this.ctx.drawImage(
//       this.img,
//       this.x + this.w,
//       this.y,
//       this.w,
//       this.h
//     );
//   }

//   move = () => {
//     this.x -= this.dx;

//     if (this.x < -this.w) this.x = 0;
//   }
// } 
