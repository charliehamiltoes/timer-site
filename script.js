let originalSeconds = 0;
let totalSeconds = 0;
let timer = null;

function startTimer() {

    if (timer) return;

    if (totalSeconds === 0) {
    let h = Number(document.getElementById("hours").value) || 0;
    let m = Number(document.getElementById("minutes").value) || 0;
    let s = Number(document.getElementById("seconds").value) || 0;

    totalSeconds = (h * 3600) + (m * 60) + s;
    originalSeconds = totalSeconds;
}

    timer = setInterval(() => {

        if (totalSeconds <= 0) {
            clearInterval(timer);
            timer = null;
            return;
        }

        totalSeconds--;

        updateDisplay();

    }, 1000);

    updateDisplay();
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    totalSeconds = 0;
    updateDisplay();
}

function updateDisplay() {

    let h = Math.floor(totalSeconds / 3600);
    let m = Math.floor((totalSeconds % 3600) / 60);
    let s = totalSeconds % 60;

    document.getElementById("display").textContent =
        `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;

    // PROGRESS BAR
    if (originalSeconds > 0) {
        let percent = (totalSeconds / originalSeconds) * 100;
        document.getElementById("progressBar").style.width = percent + "%";
    } else {
        document.getElementById("progressBar").style.width = "100%";
    }
}

function changeTheme() {
    document.body.className = document.getElementById("theme").value;
}

updateDisplay();