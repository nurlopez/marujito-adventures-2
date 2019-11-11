'use strict';

class FoodDonut {
  constructor (canvas, x, speed) {
    this.canvas = canvas;
    this.ctx2 = canvas.getContext('2d');
    this.size = 40;
    this.y = 0;
    this.x = x;
    this.speed = speed;
    this.imageDonut = new Image ();
}
  draw() {
    this.imageDonut.src = './img/donut.png';
    this.ctx2.drawImage(this.imageDonut, this.x, this.y, this.size, this.size);
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