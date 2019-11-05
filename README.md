PROJECT 1

# MARUJITO ADVENTURES

### Description

**Main elements**

Lunch can be quite a battle, especially for Marujito de Canary bird. **Marujito Adventures** - is a survival game in which  Marujito teh canary bird has to eat the falling seeds to gain health points and at the same time avoid an early death by Tesla the Cat. 



**Backlog:** 

And additional battle is with his human, Pepita, who likes to share her snacks . Sugary foods are detrimental to Marujito's physical, mental and emotional health, so it's important Marujito avoids them). 

<u>Bonus/Prize</u>: every 500 health points, Pepita shares a very useful Grandma remedy or life tip for the player.



### MVP

###### (DOM - CANVAS) 

*CANVAS* will include the animated elements: 

- Marujito object will move left to right across the CANVAS screen width via key related events

- Tesla the Cat will move vertically and randomly (no related key actions) 

- Seeds will move vertically and randomly. 

- Collisions: 

  - if Cat object collides with Marujito object the game will inmediately end
  - if Seed object collides with Marujito the health score will increase by 100pts and the seed will disappear. 
  - *(backlog) If Donut object collides with Marujito, the Score will decrease by 50pts and the donut will disappear*
  - *(backlog) If Score is % 500 === 0, a random text will appear.* 

  

### Data structure

###### Classes and methods definition.

**main.js**

```js
function createSplashScreen(){ }

function createGameScreen(){ }

function createGameOverScreen(){}

State functions between screens:
 function startGame() {} // Splash screen / Game over screen > Game screen
 function gameOver () {} //  Game screen > Game over screen 

```

**Game.js**

```js
Game(){};

Game.prototype.start = function () {};

Game.prototype.startLoop(){};

Game.prototype.checkCollisions{};

Game.prototype.updateGameStats = function () {};

Game.prototype.gameOver = function () {};

Game.prototype.removeGameScreen = function () {}
```

**Player-bird.js**

```js
function Player(canvas) {};

Player.prototype.setDirection = function (direction) {}

Player.prototype.didCollide = function (enemyCat) {}
	var playerBirdSides
    var enemyCatSides 

Player.prototype.didCollide = function foodSeed) {}
	var playerBirdSides
    var enemySeedSides 

Player.prototype.draw = function () {}
```

**Enemy-cat.js**

```js
function EnemyCat(canvas, x, speed) {

Enemy.prototype.draw = function () {}

Enemy.prototype.updatePosition = function () {}
	
Enemy.prototype.isInsideScreen = function () {}
```

**Food-seed.js**

```js
function FoodSeed(canvas, x, speed) {

Enemy.prototype.draw = function () {}

Enemy.prototype.updatePosition = function () {}
	
Enemy.prototype.isInsideScreen = function () {}
```



(**backlog - enemy-donut.js**)

**(backlog - grandma-quotes.js)**



### States y States Transitions

```js
- splashScreen()
  - createSplash()
  - addEventListener(startGame)
```

```js
- startGame()
  - removeSplashScreen()
  - create new Game()
  - game.start()
```

```js
- gameOver()
  - removeGameScreen();
  - createGameOver()
  - addEventListener(startGame) 
```



### Tasks

- Main - buildDom

- Main - createSplashScreen

- Main - addEventListener (click, startGame)

- Main - createGameScreen

- Main - createGameOverScreen

- Main - addEventListener (click, startGame)

- Main - addEventListener (load, main)

- Game - buildCanvas

- Game - clearCanvas

- Game - updateCanvas

- Game - drawCanvas

- Game - addEventListener (keys left - right)

- Game - check collisions

- Game  - update Stats (score)

- Game - setGameOver

- playerBird - create

- playerBird - set direction (left / right

- playerBird - collision (enemyCat)

- playerBird - collision (foodSeed)

- enemyCat - create

- enemyCat - set direction

- enemyCat - speed

- foodSeed - create

- foodSeed - set direction

- foodSeed - speed

  

### Trello

https://trello.com/b/Ckt5ULnc



### Git
https://github.com/nurlopez/marujito-adventures 

### Slides
