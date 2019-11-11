'use strict';

class Enemy {
  constructor (canvas, x, speed) {
      this.canvas = canvas;
      this.ctx3 = canvas.getContext('2d');
      this.size = 75;
      this.y = 0;
      this.x = x;
      this.speed = speed;
      this.imageCat = new Image ();
  }
  
  draw () {
    this.imageCat.src = './img/cat.png';
    this.ctx3.drawImage(this.imageCat, this.x, this.y, this.size, this.size);
  };

  updatePosition() {
    this.y = this.y + this.speed;
  };

  isInsideScreen() {
      if (this.y + this.size / 2 > 0 && this.x + this.size < this.canvas.width) {
      return true 
    }
  }
};
  