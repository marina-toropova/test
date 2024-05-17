
let timerContainer = document.querySelector('.map__time');

let startTime;
let elapsedTime = 0;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  setInterval(updateTime, 1000);
}

function updateTime() {
  elapsedTime = Date.now() - startTime;
  displayTime(elapsedTime);
}

function displayTime(elapsedTime) {
    const seconds = Math.floor(elapsedTime / 1000) % 60;
    const minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
    const hours = Math.floor(elapsedTime / 1000 / 60 / 60);
    
    const formattedTime = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
    
    timerContainer.textContent = formattedTime;
  }

window.onload = startTimer;

window.onbeforeunload = function() {
  // Сохранение времени при закрытии вкладки
  sessionStorage.setItem('elapsedTime', elapsedTime);
};

window.onload = function() {
  // При восстановлении страницы, продолжаем таймер с сохраненного времени
  let savedTime = sessionStorage.getItem('elapsedTime');
  if (savedTime) {
    elapsedTime = parseInt(savedTime, 10);
    startTimer();
  }
};
