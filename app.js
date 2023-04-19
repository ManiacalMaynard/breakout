const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

//all the ball things:
const ballRadius = 10;
const drawBall = () => {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
};

// User interaction defined here
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
}

// Here's the paddle stuff!
const paddleHeight = 10;
const paddleWidth = 75;
let rightPressed = false;
let leftPressed = false;
let paddleX = (canvas.width - paddleWidth) / 2;
const drawPaddle = () => {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
};

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  x + dx > canvas.width - ballRadius || x + dx < ballRadius ? (dx = -dx) : dx;
  y + dy > canvas.height - ballRadius || y + dy < ballRadius ? (dy = -dy) : dy;
  x += dx;
  y += dy;
  if (rightPressed) {
    paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
  } else if (leftPressed) {
    paddleX = Math.max(paddleX - 7, 0);
  }
};

setInterval(draw, 10);

console.log("Don't push me cause I'm close to the edge...");
