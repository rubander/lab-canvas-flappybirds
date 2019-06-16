let game = new Flappy();




window.onload = function(e) {
  e.preventDefault()
  document.getElementById("start-button").onclick = function() {
    startGame();
    setListeners()
  };

  function startGame() {
    let canvas = document.getElementById("flappyboard")
    game.init(canvas)
    game.startingPoint()

  }

};


var spaceKey = 38

setListeners = () => {
  document.onkeydown = function(event) {
    if (event.keyCode === spaceKey) {
      game.player.posX -= 5;
      game.player.speedX -= 10;
    }
  }
}