'use strict';

function FoodSeed(canvas, x, speed) {
    this.canvas = canvas;
    this.ctx2 = canvas.getContext('2d');
    this.size = 15;
    this.y = 0;
    this.x = x;
    this.speed = speed;
}
  
  FoodSeed.prototype.draw = function() {
    this.ctx2.fillStyle = '#B08091';
    // fillRect(x, y, width, height)
    this.ctx2.fillRect(this.x, this.y, this.size, this.size);
  };
  
  FoodSeed.prototype.updatePosition = function() {
    this.y = this.y + this.speed;
  };
  
  FoodSeed.prototype.isInsideScreen = function() {
    // if y plus half of its size is smaller then 0 return
    return this.y + this.size / 2 > 0;
  };