
let cnt = 0;

function counterStart3(timeInterval){
    setInterval(function(){
        console.log("Timer " + cnt);
        cnt++;
    }, timeInterval);
}

function counterStart2(timeInterval) {
    return new Promise(function(resolve) {
        setTimeout(resolve, timeInterval);
    })
}

//Callback Hell
function counterStart1(timeInterval) {
    setTimeout(function() {
        console.log("Timer 1");
        setTimeout(function() {
            console.log("Timer 2");
            setTimeout(function() {
                console.log("Timer 3");
            }, timeInterval);
        }, timeInterval)
    }, timeInterval)
}

//counterStart1(5000);

//Promise Hell
counterStart2(5000).then(function(){
    console.log("Timer 1");
    counterStart2(5000).then(function(){
        console.log("Timer 2");
        counterStart2(5000).then(function(){
            console.log("Timer 3");
        })
    })
});

//Promise Chaining
counterStart2(5000)
.then(function(){
    console.log("TIMER 1");
    return counterStart2(5000)
})
.then(function(){
    console.log("TIMER 2");
    return counterStart2(5000)
})
.then(function() {
    console.log("TIMER 3");
})

counterStart3(1000);

console.log("Counter Started");

