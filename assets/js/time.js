const localTimeElement = document.getElementById('localTime');

function formatTimeValue(value) {
if (value < 10) {
    return '0' + value;
} else {
    return value;
}
}

function updateTime() {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    hour = formatTimeValue(hour);
    minute = formatTimeValue(minute);
    second = formatTimeValue(second);

    const currentTimeString = `${hour}:${minute}:${second}`;

    if (localTimeElement) {
        localTimeElement.textContent = currentTimeString;
    }
}
setInterval(updateTime, 1000);
updateTime();