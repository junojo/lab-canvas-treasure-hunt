// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  const canvasElement = document.querySelector('canvas');
  const context = canvasElement.getContext('2d');
  //   context.strokeStyle = 'red';
  //   context.strokeRect(0, 0, 100, 100);
  //   context.fillRect(150, 150, 100, 75);

  const numberOfLines = 9;
  let linesStart = 50;
  for (let line = 0; line < numberOfLines; line++) {
    // draw vertical lines
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    context.beginPath();
    context.moveTo(linesStart, 0);
    context.lineTo(linesStart, 500);
    context.stroke();
    context.closePath();

    // draw horizontal lines
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    context.beginPath();
    context.moveTo(0, linesStart);
    context.lineTo(500, linesStart);
    context.stroke();
    context.closePath();

    console.log(linesStart);
    // add 50 to counter
    linesStart += 50;
  }
}

function drawEverything() {
  drawGrid();
  // drawPlayer()
  // drawTreasure()
}

drawEverything();

class Character {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  moveDown() {
    this.row += 1;
  }
  moveRight() {
    this.col += 1;
  }
}

const player = new Character(0, 0); // (0,0) = Initial position

player.moveDown(); // Increase by 1 the value of player.row
player.moveRight(); // Increase by 1 the value of player.col

console.log(player.col, player.row); // => 1,2

function drawPlayer(row, col) {
  const playerImage = new Image();
  playerImage.src = 'images/character-down.png';
  playerImage.addEventListener('load', () => {
    context.drawImage(playerImage, row, col);
    context.fillStyle = context.createPattern(playerImage, 'repeat');
    context.fill();
  });
}

drawPlayer(100, 100);

class Treasure {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  drawTreasure() {
    const treasureImage = new Image();
    treasureImage.src = 'images/treasure.png';
    treasureImage.addEventListener('load', () => {
      context.drawImage(treasureImage, row, col, 50, 50);
      context.fillStyle = context.createPattern(treasureImage, 'repeat');
      context.fill();
    });
  }
  //setRandomPosition()
}
