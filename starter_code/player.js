class Bird {
    constructor(ctx, posX, posY) {
        this.canvasDOMEl = document.getElementById("flappyboard");
        this.ctx = ctx;

        this.posX = posX
        this.posY = posY
        this.birdDimensionsX = 80
        this.birdDimensionsY = 56
        this.speedX = 0
        this.speedY = -2
        this.gravity = .01
        this.gravitySpeed = 0
        this.img = new Image()
        this.img.src = "images/flappy.png"
        this.spaceKey = 38
    }


    update = () => {

        this.ctx = this.canvasDOMEl.getContext("2d");

        this.ctx.drawImage(
            this.img,
      
            this.posX,
      
            this.posY,
      
            this.birdDimensionsX,
      
            this.birdDimensionsY
          );
    }

    newPos = () => {
        this.gravitySpeed += this.gravity
        this.posX += this.speedX

        this.posY += this.speedY + this.gravitySpeed

        this.hitsFloor()
        // this.setListeners()
    }


    hitsFloor = () => {
        let floor = 800 - 56

        if (this.y > floor) this.y = floor
    }

    // setListeners = () => {
    //     document.onkeydown = function(event) {
    //       if (event.keyCode === this.spaceKey) {
    //         this.posX -= 5;
    //         this.speedX -= 10;
    //       }
    //     }
    //   }
}