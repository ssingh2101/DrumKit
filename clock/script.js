const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digital = document.getElementById('digTime');
let currentTime;

function setDate() {
        const now = new Date();

        let seconds = now.getSeconds();
        const secondDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondDegrees}deg)`;

        let minutes = now.getMinutes();
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

        let hours = now.getHours();
        const hourDegrees = ((hours / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`

        hours = hours == 0 ? '00' : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        currentTime = `${hours} : ${minutes} : ${seconds}`
        digital.innerHTML = currentTime;
}

setInterval(setDate, 1000)