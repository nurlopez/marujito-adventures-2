'use strict';

class FoodSeed {
  constructor (canvas, x, speed) {
    this.canvas = canvas;
    this.ctx4 = canvas.getContext('2d');
    this.size = 40;
    this.y = 0;
    this.x = x;
    this.speed = speed;
    this.imageSeed = new Image ();
}
  draw () {
    this.imageSeed.src = './img/seed.png';
    this.ctx4.drawImage(this.imageSeed, this.x, this.y, this.size, this.size);
  };
  updatePosition () {
    this.y = this.y + this.speed;
  };

  isInsideScreen () {
    if (this.y + this.size / 2 > 0 && this.x + this.size < this.canvas.width) {
      return true 
    }

} 
};
