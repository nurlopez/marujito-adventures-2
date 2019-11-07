// Main

function buildDom(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString;
  return div.children[0];
}

function main() {
  var game; // instance of the Game
  var splashScreen; // Start Screen
  var gameOverScreen; // Game Over Screen
  var scoreScreen; // score Screen
  var playerName;
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

    var startButton = splashScreen.querySelector("button");
    startButton.addEventListener("click", function() {
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
        <article class = "key">
      <p>KEY</p>
      <ul>
      <li><img src ="./img/seed.png" width = 30px"> = + 100 pts</li>
      <li><img src ="./img/donut.png" width = 30px"> = - 100 pts</li>
      <li><img src ="./img/cat.png" width = 30px"> = GAME OVER</li>
      </ul>
      </article>
        <article class="grandma-tip">
        <div class="quote">
          <span class="label">pepita says:</span>
          </br>
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
      <img src="./img/backcover-gameover.png" alt="backcover image">
        <h1>Game over</h1>
        </br>
        <div class="name">
        <label for="name">nAme:</label>
        <input type="text" id="name" name="name">
        </div>
        <p class="your-score">Your score: <span>${score}</span></p>
        <div class = "btn-container">
        <button class = "score-btn">Add score!</button>
        <div class = "btn-back-container">
        <button class = "restart-btn">Restart</button>
        <button class= "start-btn">home</button>
        </div>
        </div>
    </main>
    `);

    var button = gameOverScreen.querySelector(".score-btn");

    button.addEventListener("click", function() {
      playerName = gameOverScreen.querySelector("#name").value;
    });

    button.addEventListener("click", scoreBoard);

    var button = gameOverScreen.querySelector(".restart-btn");
    button.addEventListener("click", startGame);

    var button = gameOverScreen.querySelector(".start-btn");
    button.addEventListener("click", backSplash);

    var span = gameOverScreen.querySelector("span");
    span.innerText = score;

    document.body.appendChild(gameOverScreen);
  }

  function removeGameOverScreen() {
    if (gameOverScreen) {
      gameOverScreen.remove();
    }
  }

  // -- score screen

  function createScoreScreen(score, playerName) {
    scoreScreen = buildDom(`
      <main class="score-main">
      <img src="./img/marujito-score.png" alt="cover image">
        <h1>SCORE BOARD</h1>
        <div class= "score-table">
        <table>
          <tr>
            <th>Player</th>
            <th>heAlth</th>
          </tr>
          <tr>
        <td><span id="name">${playerName}</span></td>
        <td><span>${score} pts</span></td>
      </tr>
      </table> 
      </div>      
      <button class= "start-btn2">home</button>
      </main>
    `);

    var button = scoreScreen.querySelector(".start-btn2");
    button.addEventListener("click", backSplash2);

    // local storage
    var scoreArr;

    if (localStorage.getItem("scoreArr") === null) {
      scoreArr = [];
    } else {
      scoreArr = JSON.parse(localStorage.getItem("scoreArr"));
    }

    var nameScore = [
      {
        name: playerName,
        score: score
      }
    ];

    scoreArr.push(nameScore);

    var nameScoreStringified = JSON.stringify(nameScore);

    localStorage.setItem("scoreArr", nameScoreStringified);
    console.log(nameScoreStringified);

    var retrieved = localStorage.getItem("scoreArr");
    console.log("retrieved", retrieved);

    var nameScoreParsed = JSON.parse(retrieved);
    console.log(nameScoreParsed);

    //nameScoreParsed.push(nameScore);

    //var stringifiedAgain = JSON.stringify(nameScoreParsed);
    //localStorage.setItem('nameScore', stringifiedAgain);

    document.body.appendChild(scoreScreen);
  }

  function removeScoreScreen() {
    scoreScreen.remove();
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

  function scoreBoard() {
    removeGameOverScreen();
    createScoreScreen(game.score, playerName);
  }

  function backSplash() {
    removeGameOverScreen();
    createSplashScreen();
  }

  function backSplash2() {
    removeScoreScreen();
    createSplashScreen();
  }

  // -- initialize Splash screen on initial start

  createSplashScreen();
}

window.addEventListener("load", main);
