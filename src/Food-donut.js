'use strict';

function FoodDonut(canvas, x, speed) {
    this.canvas = canvas;
    this.ctx2 = canvas.getContext('2d');
    this.size = 20;
    this.y = 0;
    this.x = x;
    this.speed = speed;
}
  
FoodDonut.prototype.draw = function() {
    this.ctx2.fillStyle = '#ffc0cb';
    // fillRect(x, y, width, height)
    this.ctx2.fillRect(this.x, this.y, this.size, this.size);
  };
  
  FoodDonut.prototype.updatePosition = function() {
    this.y = this.y + this.speed;
  };
  
  FoodDonut.prototype.isInsideScreen = function() {
    // if y plus half of its size is smaller then 0 return
    return this.y + this.size / 2 > 0;
  };