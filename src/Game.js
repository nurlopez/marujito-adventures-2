"use strict";

function Game() {
    this.canvas = null;
    this.ctx = null;
    this.enemies = [];
    this.foodSeeds = [];
    this.foodDonuts = [];
    this.player = null;
    this.gameIsOver = false;
    this.gameScreen = null;
    this.score = 0;
    this.quote = 'Every 500 points I\'ll talk';
}


Game.prototype.start = function () {

    this.canvasContainer = document.querySelector('.canvas-container');
    this.canvas = this.gameScreen.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');


    this.livesElement = this.gameScreen.querySelector('.lives .value');
    this.scoreElement = this.gameScreen.querySelector('.score .value');
    this.quoteElement = this.gameScreen.querySelector('.quote .value');


    this.containerWidth = this.canvasContainer.offsetWidth;
    this.containerHeight = this.canvasContainer.offsetHeight;
    this.canvas.setAttribute('width', this.containerWidth);
    this.canvas.setAttribute('height', this.containerHeight);

    this.player = new Player(this.canvas, 1, 0);


    this.handleKeyDown = function (event) {
        console.log(event.key);
        if (event.key === 'ArrowLeft') {
            this.player.setDirection('left'); // move left
        } else if (event.key === 'ArrowRight') {
            this.player.setDirection('right'); // move right
        } else if (event.keyCode == 32) {
            this.player.direction = 0;
        };

    };

    document.body.addEventListener('keydown', this.handleKeyDown.bind(this));


    this.startLoop();
};

Game.prototype.startLoop = function () {
    var loop = function () {

        if (Math.random() > 0.99) {
            var randomY = this.canvas.height * Math.random();
            this.enemies.push(new Enemy(this.canvas, randomY, 3));

        } else if (Math.random() > 0.98) {
            var randomY = this.canvas.height * Math.random();
            this.foodSeeds.push(new FoodSeed(this.canvas, randomY, 4));
        } else if (Math.random() > 0.99) {
            var randomY = this.canvas.height * Math.random();
            this.foodDonuts.push(new FoodDonut(this.canvas, randomY, 2));
        }


        this.checkCollisions();

        this.player.handleScreenCollision();


        this.enemies = this.enemies.filter(function (enemy) {
            enemy.updatePosition();
            return enemy.isInsideScreen();
        });

        this.foodSeeds = this.foodSeeds.filter(function (foodSeed) {
            foodSeed.updatePosition();
            return foodSeed.isInsideScreen();
        });

        this.foodDonuts = this.foodDonuts.filter(function (foodDonut) {
            foodDonut.updatePosition();
            return foodDonut.isInsideScreen();
        });

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);


        this.player.draw();


        this.enemies.forEach(function (item) {
            item.draw();
        });

        this.foodSeeds.forEach(function (item) {
            item.draw();
        });

        this.foodDonuts.forEach(function (item) {
            item.draw();
        });

        this.updateGameStats();

        if (!this.gameIsOver) {
            window.requestAnimationFrame(loop);
        }
        this.updateGameStats();



    }.bind(this);



    window.requestAnimationFrame(loop);
};

Game.prototype.checkCollisions = function () {
    this.enemies.forEach(function (enemy) {
        if (this.player.didCollide(enemy)) {
            this.player.removeLife();

            enemy.y = 0 - enemy.size;

            if (this.player.lives === 0) {
                this.gameOver();
            }
        }
    }, this);

    this.foodSeeds.forEach(function (foodSeed) {
        if (this.player.didCollide(foodSeed)) {
            this.player.addScore();
            if (this.player.score % 500 === 0) {
                var grannyTips = [
                    'Potato slices on your face, cures headaches',
                    'Feeling itchy? Olive oil for Eczema',
                    'Have a little yogurt for that bad breath',
                    'Ease your hangover with a teaspoon of apple cider vinegar',
                    'Vodka for stinky feet',
                    'Stop snoring with a glass of warm milk and tumeric powder',
                    'Have you had enough to eat? Are you sure? Do you want a sandwich?',
                    'When I was your age I had to walk to school uphill, both ways!',
                    'If you can\'t say something nice, don\'t say anything at',
                    'You catch more flies with honey than with vinegar',
                    'Don\'t leave until tomorrow what you can do today'
                ]
                this.quote = grannyTips[Math.floor(Math.random() * grannyTips.length)];
                return this.quote;
            }
            foodSeed.y = 0 - foodSeed.size;
        }
    }, this);

    this.foodDonuts.forEach(function (foodDonut) {
        if (this.player.didCollide(foodDonut)) {
            if (this.player.score > 0) {
                this.player.subtractScore();
            } else {
                this.gameOver();
            }

            foodDonut.y = 0 - foodDonut.size;
        }
    }, this);
};

Game.prototype.passGameOverCallback = function (callback) {
    this.onGameOverCallback = callback;
};

Game.prototype.gameOver = function () {

    this.gameIsOver = true;


    this.onGameOverCallback(this.score);
};

Game.prototype.removeGameScreen = function () {
    this.gameScreen.remove();
};

Game.prototype.updateGameStats = function () {

    this.livesElement.innerHTML = this.player.lives;
    this.scoreElement.innerHTML = this.player.score;
    this.quoteElement.innerHTML = this.quote;
    this.score = this.player.score;
};