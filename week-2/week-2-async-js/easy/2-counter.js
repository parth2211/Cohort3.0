let cnt = 0;

function callback(){
    cnt++;
    console.log("Timer " + cnt);
    setTimeout(callback, 1000);
}

function counterStart(timeInterval) {
    setTimeout(callback, timeInterval);
}

counterStart(5000);

console.log("Counter Startes ...");