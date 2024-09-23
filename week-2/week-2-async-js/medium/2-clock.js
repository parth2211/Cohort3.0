function getTime() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let sec = date.getSeconds();

    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;
    sec = sec < 10 ? '0' + sec : sec;

    let strTime = hours + '::' + minutes + '::' + sec + " " + ampm;
    return strTime;
}

function showLiveMachineTime() {
    let strTime = getTime();
    console.log("Current Time : " + strTime);
    setTimeout(showLiveMachineTime, 1000);
}

showLiveMachineTime()
