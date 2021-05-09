// Global Variables
let backgroundImg;
let form, cell, game;
let gameState = "start";

// Loading Assets.
function preload(params) {
  backgroundImg = loadImage("src/assets/background.jpeg");
}

function setup(params) {
  const canvas = createCanvas(windowWidth - 10, windowHeight - 10);

  form = new Form();
  form.display();
}

function draw(params) {
  background(248, 244, 234);

  if (gameState === "start") {
    // CHANGE ME: The picture resolution is really low-
    // i am using a color as an substitute.
    // background('');
  }
}
