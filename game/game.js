var targets = document.getElementsByClassName('target');
var game = document.getElementsByClassName('game')[0];
var score = document.getElementById('score');
var timer;
var counter = 0;

function getRandomPosition() {
  var x = Math.floor(Math.random() * (game.offsetWidth - 50));
  var y = Math.floor(Math.random() * (game.offsetHeight - 50));
  return [x, y];
}

function setTargetPositions() {
  for (var i = 0; i < targets.length; i++) {
    var position = getRandomPosition();
    targets[i].style.left = position[0] + 'px';
    targets[i].style.top = position[1] + 'px';
    targets[i].style.display = 'block';
  
  }
}

function startGame() {
  setTargetPositions();
  game.addEventListener('click', handleClick);
  timer = setTimeout(function() {
    setTargetPositions();
    score.innerText = "Время вышло, попробуйте еще раз!";
    counter = 0;
    startGame();
  }, 10000);
}


function handleClick(e) {
  if (e.target.classList.contains('target')) {
    e.target.style.display = 'none';
    e.target.style.backgroundColor = 'blue'; // добавленный код
    counter++;
    if (counter === targets.length) {
      clearTimeout(timer);
      game.removeEventListener('click', handleClick);
      score.innerText = "Поздравляем! Вы победили!";
      counter = 0;
      startGame();
    }

    // Запись времени клика
    showClickTime();
  }
}

function showClickTime() {
  var currentTime = new Date().toLocaleTimeString();
  document.getElementById("clickTime").textContent = "Время клика: " + currentTime;
}

function restartGame() {
  clearTimeout(timer);
  game.removeEventListener('click', handleClick);
  score.innerText = "";
  counter = 0;
  startGame();
}

startGame();