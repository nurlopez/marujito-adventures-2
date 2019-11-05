'use strict';

function FoodSeed(canvas, x, speed) {
    this.canvas = canvas;
    this.ctx4 = canvas.getContext('2d');
    this.size = 40;
    this.y = 0;
    this.x = x;
    this.speed = speed;
    this.imageSeed = new Image ();
}
  
  FoodSeed.prototype.draw = function() {
    this.imageSeed.src = './img/seed.png';
    this.ctx4.drawImage(this.imageSeed, this.x, this.y, this.size, this.size);
  };
  
  FoodSeed.prototype.updatePosition = function() {
    this.y = this.y + this.speed;
  };
  
  FoodSeed.prototype.isInsideScreen = function() {
    // if y plus half of its size is smaller then 0 return
    if (this.y + this.size / 2 > 0 && this.x + this.size < this.canvas.width) {
      return true 
    }
    //return this.y + this.size / 2 > 0  
    
  };
