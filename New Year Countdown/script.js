const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00 `);

// Set background year
year.innerText = currentYear + 1;

// updateCountdown
function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const diffDays = Math.floor(diff / 1000 / 60 / 60 / 24);
    const diffHours = Math.floor(diff / 60 / 60) % 24;
    const diffMinutes = Math.floor(diff / 1000 / 60) % 60;
    const diffSeconds = Math.floor(diff / 1000) % 60;

    // Add values to DOM
    days.innerHTML = diffDays;
    hours.innerHTML = diffHours < 10 ? '0' + diffHours : diffHours;
    minutes.innerHTML = diffMinutes < 10 ? '0' + diffMinutes : diffMinutes;
    seconds.innerHTML = diffSeconds < 10 ? '0' + diffSeconds : diffSeconds;
}

// Show spinner before countdown

setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000);

// Run every Second
setInterval(updateCountdown, 1000);
