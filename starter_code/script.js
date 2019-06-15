let game2 = new Flappy();




window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    let canvas = document.getElementById("flappyboard")
    game.init(canvas)

  }

};
