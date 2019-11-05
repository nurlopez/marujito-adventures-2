'use strict';

function Player(canvas, lives, score) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.lives = lives;
    this.score = score;
    this.size = 60;
    this.x = 0;
    this.y = canvas.height-this.size;
    this.direction = 0;
    this.speed = 5;
    this.imageBird = new Image ();
    }
  
  Player.prototype.setDirection = function(direction) {
    // +1 right  -1 left
    if (direction === 'left'){ this.direction = -1;}
    else if (direction === 'right'){ this.direction = 1;}
    else if (this.direction === 'keyup') {this.direction = 0;}
  };
  
  Player.prototype.didCollide = function(enemy) {
    var playerLeft = this.x;
    var playerRight = this.x + this.size;
    var playerTop = this.y;
    var playerBottom = this.y + this.size;
  
    var enemyLeft = enemy.x;
    var enemyRight = enemy.x + enemy.size;
    var enemyTop = enemy.y;
    var enemyBottom = enemy.y + enemy.size;
  
    var crossRight = enemyLeft <= playerRight && enemyLeft >= playerLeft;
    var crossLeft = enemyRight >= playerLeft && enemyRight <= playerRight;
    var crossTop = enemyBottom >= playerTop && enemyBottom <= playerBottom;
    var crossBottom = enemyTop <= playerBottom && enemyTop >= playerTop;
  
    if ((crossRight || crossLeft) && (crossBottom || crossTop)) {
      return true;
    }
    return false;
  };

  Player.prototype.didCollide = function(foodSeed) {
    var playerLeft = this.x;
    var playerRight = this.x + this.size;
    var playerTop = this.y;
    var playerBottom = this.y + this.size;
  
    var foodSeedLeft = foodSeed.x;
    var foodSeedRight = foodSeed.x + foodSeed.size;
    var foodSeedTop = foodSeed.y;
    var foodSeedBottom = foodSeed.y + foodSeed.size;
  
    var crossRight = foodSeedLeft <= playerRight && foodSeedLeft >= playerLeft;
    var crossLeft = foodSeedRight >= playerLeft && foodSeedRight <= playerRight;
    var crossTop = foodSeedBottom >= playerTop && foodSeedBottom <= playerBottom;
    var crossBottom = foodSeedTop <= playerBottom && foodSeedTop >= playerTop;
  
    if ((crossRight || crossLeft) && (crossBottom || crossTop)) {
      return true;
    }
    return false;
  };

  Player.prototype.didCollide = function(foodDonut) {
    var playerLeft = this.x;
    var playerRight = this.x + this.size;
    var playerTop = this.y;
    var playerBottom = this.y + this.size;
  
    var foodDonutLeft = foodDonut.x;
    var foodDonutRight = foodDonut.x + foodDonut.size;
    var foodDonutTop = foodDonut.y;
    var foodDonutBottom = foodDonut.y + foodDonut.size;
  
    var crossRight = foodDonutLeft <= playerRight && foodDonutLeft >= playerLeft;
    var crossLeft = foodDonutRight >= playerLeft && foodDonutRight <= playerRight;
    var crossTop = foodDonutBottom >= playerTop && foodDonutBottom <= playerBottom;
    var crossBottom = foodDonutTop <= playerBottom && foodDonutTop >= playerTop;
  
    if ((crossRight || crossLeft) && (crossBottom || crossTop)) {
      return true;
    }
    return false;
  };

  Player.prototype.handleScreenCollision = function() {
    this.x = this.x + this.direction * this.speed;
    var screenRight = this.canvas.width-this.size;
    var screenLeft = 0;
  
    if (this.x < screenLeft) this.direction = 1;
    else if (this.x > screenRight) this.direction = -1;
  };
  
  Player.prototype.removeLife = function() {
    this.lives -= 1;
  };

  Player.prototype.addScore = function() {
    this.score += 100;
  };

  Player.prototype.subtractScore = function() {
    this.score -= 50;
  };
  
  Player.prototype.draw = function() {
    this.imageBird.src = './img/marujito.png';
    this.ctx.drawImage(this.imageBird, this.x, this.y, this.size, this.size);
   };
  