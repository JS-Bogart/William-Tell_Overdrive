class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
  }

  generateObjects() {
    this.game.generatePlanets(this.ctx);
    this.game.generateAsteroids(this.ctx);
  }

  fireCrossbow() {
    this.game.bolt.crossbowStatus = "shooting";
  }

  removeCrossbow() {
    this.game.bolt.crossbowStatus = "fired";
  }

  finalPhase() {
    this.game.stopObjects();
  }

  start() {
    const generateObjects = this.generateObjects.bind(this);
    const finalPhase = this.finalPhase.bind(this);
    const fireCrossbow = this.fireCrossbow.bind(this);
    const removeCrossbow = this.removeCrossbow.bind(this);
    setTimeout(function () {
      generateObjects();
      fireCrossbow();
    }, 14 * 1000);
    setTimeout(function () {
      removeCrossbow();
    }, 16 * 1000);
    setTimeout(function () {
      finalPhase();
    }, 93 * 1000);
    requestAnimationFrame(this.animate.bind(this));
  };
  
  animate() {
    this.game.step();
    this.game.draw(this.ctx);
  
    requestAnimationFrame(this.animate.bind(this));
  };
}


export default GameView;