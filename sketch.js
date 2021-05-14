let gameState = 0;
let database;
let form, cell, body, allCells, cellCount;
let startUpImage;

let cell1, cell2, cell3, cell4, cell5;
let cells = [];

// Loading Assets
function preload(params) {
  // startUpImage = loadImage('./src/assets/')
}

function setup(params) {
  const canvas = createCanvas(windowWidth - 10, windowHeight - 10);

  database = firebase.database();

  body = new Body();
  body.getState();
  body.start();
}

function draw(params) {
  background(248, 244, 234);

  // Game Control according to the gameState.
  if (cellCount === 5) {
    body.update(1);
  }
  if (gameState === 1) {
    clear();
    body.play();
  }
  if (gameState === 2) {
    body.end();
  }
}
