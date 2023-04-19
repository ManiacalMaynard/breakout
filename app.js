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

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x + dx > canvas.width - ballRadius || x + dx < ballRadius ? (dx = -dx) : dx;
  y + dy > canvas.height - ballRadius || y + dy < ballRadius ? (dy = -dy) : dy;
  x += dx;
  y += dy;
};

setInterval(draw, 10);

console.log("Don't push me cause I'm close to the edge...");
