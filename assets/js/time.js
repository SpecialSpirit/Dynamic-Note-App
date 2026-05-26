const localTimeElement = document.getElementById('localTime');
const localDateElement = document.getElementById('local-time-label');

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
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    // let second = now.getSeconds();

    hour = formatTimeValue(hour);
    minute = formatTimeValue(minute);
    // second = formatTimeValue(second);
    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();

    const currentTimeString = `${hour}:${minute}`;
    const currentDateString = `${day}, ${month} ${date}`;
    if (localDateElement) {
        localDateElement.textContent = currentDateString;
    }
    if (localTimeElement) {
        localTimeElement.textContent = currentTimeString;
    }
}
setInterval(updateTime, 1000);
updateTime();