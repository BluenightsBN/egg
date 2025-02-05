function startTimer(time) {
    window.location.href = `timer.html?time=${time}`;
}
let alarmSound = new Audio("alarm.wav");
let countdown;
let params = new URLSearchParams(window.location.search);
let time = parseInt(params.get("time"), 10) || 0;

function updateTimerDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    document.getElementById("timer").textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startCountdown() {
    updateTimerDisplay();
    countdown = setInterval(() => {
        if (time > 0) {
            time--;
            updateTimerDisplay();
        } else {
            clearInterval(countdown);
            document.getElementById("timer").textContent = "Time's up! 🚨";
            alert("Time's up! 🚨");
            alarmSound.play()
        }
    }, 1000);
}

// Start countdown automatically if on timer page
if (document.getElementById("timer")) {
    startCountdown();
}
