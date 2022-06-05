let canvas = document.getElementById('canvas');
let timer = document.getElementById('timer');
let score = document.getElementById('score');
let status = document.getElementById('status');
let status1 = document.getElementById('status1');
let status2 = document.getElementById('status2');
let die1 = document.getElementById('die1');
let die2 = document.getElementById('die2');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let start = document.getElementById('start');
let startBtn = document.getElementById('startbtn');
let gameover = document.getElementById('gameOver');
let youWin = document.getElementById('youWin');

let scores = 0;


function pageLoad() {
    start.style.display = 'block';
    canvas.style.display = 'none';
    gameover.style.display = 'none';
    youWin.style.display = 'none';
};


startBtn.addEventListener('click', function () {
    start.style.display = 'none';
    canvas.style.display = 'block';
    gameover.style.display = 'none';
    youWin.style.display = 'none';

    let time = 15;
    let timerInterval = setInterval(function () {
        time -= 1;
        timer.innerHTML = `Time Left: ${time}`;
        if (time === 0 && scores < 500) {
            clearInterval(timerInterval);
            timer.innerHTML = `Time's up!`;
            status.innerHTML = `Game Over. You lose!`;
            btn1.disabled = true;
            btn2.hidden = false;
            gameover.style.display = 'block';
            canvas.style.display = 'none';
            status1.innerHTML = `You lose! Your managed ${scores} points.`;
        }
        else if (time >= 0 && scores >= 500) {
            clearInterval(timerInterval);
            status.innerHTML = `Yaaayyy..You win!`;
            btn1.disabled = true;
            btn3.hidden = false;
            youWin.style.display = 'block';
            gameover.style.display = 'none';
            canvas.style.display = 'none';
            status2.innerHTML = `You win! Your managed ${scores} points.`;
        }
    }, 1000);
});

btn2.addEventListener('click', function () {
    location.reload();
});

btn3.addEventListener('click', function () {
    location.reload();
});


btn1.addEventListener('click', function () {
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    let sum = d1 + d2;
    status.innerHTML = `You rolled a/an ${sum}`;

    scores += sum;
    score.innerHTML = `Score: ${scores}`;
});






