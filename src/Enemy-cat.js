'use strict';

function Enemy(canvas, x, speed) {
    this.canvas = canvas;
    this.ctx3 = canvas.getContext('2d');
    this.size = 75;
    this.y = 0;
    this.x = x;
    this.speed = speed;
    this.imageCat = new Image ();
  }
  
  Enemy.prototype.draw = function() {
    this.imageCat.src = './img/cat.png';
    this.ctx3.drawImage(this.imageCat, this.x, this.y, this.size, this.size);
  };
  
  Enemy.prototype.updatePosition = function() {
    this.y = this.y + this.speed;
  };
  
  Enemy.prototype.isInsideScreen = function() {
    // if y plus half of its size is smaller then 0 return
    return this.y + this.size / 2 > 0;
  };
  