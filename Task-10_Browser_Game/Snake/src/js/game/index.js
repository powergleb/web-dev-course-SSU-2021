import { SNAKE_START_POSITION,START_LENGTH,GRID_SIZE,APPLE_START_POSITION,SPEED_SNAKE } from "./Constants";
import {Counter} from "./counter";
import {Displayer} from "./displayer";
// Поле, на котором всё будет происходить, — тоже как бы переменная
var canvas = document.getElementById('game');
// Классическая змейка — двухмерная, сделаем такую же
var context = canvas.getContext('2d');
const counter = new Counter();
const displayer = new Displayer;

var grid = GRID_SIZE;
// Служебная переменная, которая отвечает за скорость змейки
var count = SPEED_SNAKE;
// Опbсание
var snake = {
  // Начальные координаты
  x: SNAKE_START_POSITION,
  y: SNAKE_START_POSITION,
  // Скорость змейки — в каждом новом кадре змейка смещается по оси Х или У. На старте будет двигаться горизонтально, поэтому скорость по игреку равна нулю.
  dx: grid,
  dy: 0,
  // массив хвоста
  cells: [],
  // Стартовая длина змейки
  maxCells: START_LENGTH
};
var apple = {
  x: APPLE_START_POSITION,
  y: APPLE_START_POSITION
};
function reloadGame() {
	snake.x = SNAKE_START_POSITION;
	snake.y = SNAKE_START_POSITION;
	snake.cells = [];
	snake.maxCells = START_LENGTH;
	snake.dx = grid;
	snake.dy = 0;
	apple.x = getRandomInt(1, 18) * grid;
	apple.y = getRandomInt(4, 18) * grid;
  counter.resetScore();
  displayer.updateScore(counter.getScore(),counter.getMaxScore());

  }
// Делаем генератор случайных чисел в заданном диапазоне
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// Игровой цикл — основной процесс, внутри которого будет всё происходить

displayer.setScore(counter.getScore(), counter.getMaxScore());
function loop() {
  requestAnimationFrame(loop);
  if (++count < 8) {
    return;
  }
  count = 0;
  context.drawImage(document.getElementById('ground') ,0, 0);
  snake.x += snake.dx;
  snake.y += snake.dy;

  if (snake.x < 0+grid) {
    reloadGame();
  }
  else if (snake.x >= canvas.width-grid) {
	reloadGame();
  }
  if (snake.y < 0 + 3 * grid) {
	reloadGame();
  }
  else if (snake.y >= canvas.height - grid) {
	reloadGame();
  }
  snake.cells.unshift({ x: snake.x, y: snake.y });
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }
  context.fillStyle = 'red';
  context.drawImage(document.getElementById('food'), apple.x, apple.y, grid - 1, grid - 1);
  context.fillStyle = 'green';
  
  snake.cells.forEach(function (cell, index) {
	  context.drawImage(document.getElementById('food'), cell.x, cell.y, grid - 1, grid - 1);
    context.drawImage(document.getElementById('snake'), cell.x, cell.y, grid - 1, grid - 1);
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;
      counter.increaseScore(1);
      counter.updateMaxScore();
      displayer.updateScore(counter.getScore(),counter.getMaxScore());
	  apple.x = getRandomInt(1, 18) * grid;
	  apple.y = getRandomInt(4, 18) * grid;
    }
    for (var i = index + 1; i < snake.cells.length; i++) {
      if ((cell.x === snake.cells[i].x && cell.y === snake.cells[i].y)) {
        reloadGame();
      }
    }
  });
}

document.addEventListener('keydown', function (e) {

  if (e.key === 'ArrowLeft' && snake.dx === 0) {

    snake.dx = -grid;
    snake.dy = 0;
  }
  else if (e.key === 'ArrowUp' && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  else if (e.key === 'ArrowRight' && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }

  else if (e.key === 'ArrowDown' && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});
reloadGame();
requestAnimationFrame(loop);