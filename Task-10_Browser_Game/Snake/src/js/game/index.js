// Поле, на котором всё будет происходить, — тоже как бы переменная
var canvas = document.getElementById('game');
// Классическая змейка — двухмерная, сделаем такую же
var context = canvas.getContext('2d');
// Размер одной клеточки на поле — 16 пикселей
var grid = 32;
// Служебная переменная, которая отвечает за скорость змейки
var count = 0;
// Опсание
var snake = {
  // Начальные координаты
  x: 320,
  y: 320,
  // Скорость змейки — в каждом новом кадре змейка смещается по оси Х или У. На старте будет двигаться горизонтально, поэтому скорость по игреку равна нулю.
  dx: grid,
  dy: 0,
  // массив хвоста
  cells: [],
  // Стартовая длина змейки
  maxCells: 4
};
var apple = {
  x: 640,
  y: 640
};
// Делаем генератор случайных чисел в заданном диапазоне
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// Игровой цикл — основной процесс, внутри которого будет всё происходить
function loop() {
  requestAnimationFrame(loop);
  if (++count < 8) {
    return;
  }
  count = 0;
  context.clearRect(0, 0, canvas.width, canvas.height);
  snake.x += snake.dx;
  snake.y += snake.dy;
  if (snake.x < 0) {
    snake.x = 320;
        snake.y = 320;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;

        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
  }
  else if (snake.x >= canvas.width) {
    snake.x = 320;
        snake.y = 320;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;

        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
  }
  if (snake.y < 0) {
    snake.x = 320;
        snake.y = 320;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;

        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
  }
  else if (snake.y >= canvas.height) {
    snake.x = 320;
        snake.y = 320;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;

        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
  }
  snake.cells.unshift({ x: snake.x, y: snake.y });
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }
  context.fillStyle = 'red';
  context.fillRect(apple.x, apple.y, grid - 1, grid - 1);
  context.fillStyle = 'green';
  snake.cells.forEach(function (cell, index) {
    context.fillRect(cell.x, cell.y, grid - 1, grid - 1);
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;
      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
    }
    for (var i = index + 1; i < snake.cells.length; i++) {
      if ((cell.x === snake.cells[i].x && cell.y === snake.cells[i].y)) {

        snake.x = 320;
        snake.y = 320;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;

        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
      }
    }
  });
}

document.addEventListener('keydown', function (e) {

  if (e.which === 37 && snake.dx === 0) {

    snake.dx = -grid;
    snake.dy = 0;
  }
  else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }

  else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});

requestAnimationFrame(loop);