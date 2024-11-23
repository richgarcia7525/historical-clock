// Modern Clock
function updateModernClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('modern-time').innerText = `${hours}:${minutes}:${seconds}`;
}

// Egyptian Sundial Time
function calculateSundialTime() {
    const now = new Date();
    const sunrise = 6; // Assume sunrise at 6am
    const sunset = 18; // Assume sunset at 6pm
    const dayLength = sunset - sunrise;

    let egyptianHour;
    if (now.getHours() >= sunrise && now.getHours() < sunset) {
        const daylightHours = now.getHours() - sunrise + now.getMinutes() / 60;
        egyptianHour = Math.floor((daylightHours / dayLength) * 12) + 1;
        document.getElementById('historical-time').innerText = `Hour ${egyptianHour} of Daylight`;
    } else {
        document.getElementById('historical-time').innerText = 'Nighttime (No Sundial Time)';
    }
}

// Update Clocks
function updateClocks() {
    updateModernClock();
    calculateSundialTime();
}

// Start the Clock
setInterval(updateClocks, 1000);
