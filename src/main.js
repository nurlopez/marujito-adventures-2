// Main

function buildDom(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString;
  return div.children[0];
}

function main() {
  var game; // instance of the Game
  var splashScreen; // Start Screen
  var gameOverScreen; // Game Over Screen

  // -- splash screen

  function createSplashScreen() {
    splashScreen = buildDom(`
    <main class="splash-main">
    <img src="./img/cover-marujito.png" alt="cover image">
      <h1>Marujito Adventures</h1>
      <button class= "start-btn">Start</button>
      <article class = "instructions">
      <p>instructions</p>
      <ul>
      <li><button class ="right-btn">&#x25B6</button> = move Marujito to the right</li>
      <li><button class ="right-btn">&#x25C0</button> = move Marujito to the left</li>
      <li><button class ="right-btn">space bar</button> = Marujito stops</li>
      </ul>
      </article>
    </main>
  `);

    document.body.appendChild(splashScreen);

    var startButton = splashScreen.querySelector('button');
    startButton.addEventListener('click', function() {
      startGame();
    });
  }

  function removeSplashScreen() {
    splashScreen.remove();
  }

  // -- game screen

  function createGameScreen() {
    var gameScreen = buildDom(`
    <main class="game-container">
      <header class = "left-side">
      <div class = "score-lives">
        <div class="lives">
          <span class="label">Lives:</span>
          <span class="value"></span>
        </div>
        <div class="score">
          <span class="label">Health:</span>
          <span class="value"></span>
        </div>
        </div>
        <article class="grandma-tip">
        <div class="quote">
          <span class="label">pepita says:</span>
          <span class="value"></span>
        </div>
        <img src = "./img/quote.png" width = 256px height = auto alt = "grandma"/>
        </article>
      </header>
      <div class="canvas-container">
        <canvas></canvas>
      </div>
    </main>
  `);

    document.body.appendChild(gameScreen);
    return gameScreen;
  }

  function removeGameScreen() {
    game.removeGameScreen();
  }

  // -- game over screen

  function createGameOverScreen(score) {
    gameOverScreen = buildDom(`
      <main class="gameover-main">
      <img src="./img/white-sq-300x300.jpg" alt="cover image">
        <h1>Game over</h1>
        <p>Your score: <span>${score}</span></p>
        <button class = "restart-btn">Restart</button>
        <button class= "start-btn">home</button>
    </main>
    `);

    var button = gameOverScreen.querySelector('.restart-btn');
    button.addEventListener('click', startGame);

    var button = gameOverScreen.querySelector('.start-btn');
    button.addEventListener('click', backSplash);

    var span = gameOverScreen.querySelector('span');
    span.innerText = score;

    document.body.appendChild(gameOverScreen);
  }

  function removeGameOverScreen() {
    if (gameOverScreen) {
      gameOverScreen.remove();
    }
  }

  // -- Setting the game state

  function startGame() {
    removeSplashScreen();
    // later we need to add clearing of the gameOverScreen
    removeGameOverScreen();

    game = new Game();
    game.gameScreen = createGameScreen();

    game.start();
    // End the game
    game.passGameOverCallback(function() {
      gameOver(game.score);
    });
  }

  function gameOver(score) {
    removeGameScreen();
    createGameOverScreen(score);
  }
  function backSplash() {
    
    
    removeGameOverScreen();
    createSplashScreen();

  }
  // -- initialize Splash screen on initial start

  createSplashScreen();
}

window.addEventListener('load', main);
