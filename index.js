const jsTime = document.getElementById("js-time");
const jsBatteryStatus = document.getElementById("js-battery-status");

// JS Time
function lessTen(currentTime) {
    if (currentTime < 10) {
        currentTime = `0${currentTime}`;
    } else {
        currentTime = `${currentTime}`;
    }
    return currentTime;
}

const formatDate = (Hours, Minutes) => {
    return `${Hours}:${Minutes}`;
}

if (jsTime) {
    const date = new Date();
    const currentHours = date.getHours();
    const currentMinutes = date.getMinutes();
    const currentDate = formatDate(lessTen(currentHours), lessTen(currentMinutes));
    jsTime.innerHTML = currentDate;
}

// JS Battery

if (jsBatteryStatus) {
    navigator.getBattery().then(function(battery) {
        var batteryStatus = battery.level * 100;
        batteryStatus = Math.ceil(batteryStatus);
        jsBatteryStatus.innerHTML = `${batteryStatus}%`
    })
}