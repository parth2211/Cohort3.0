const fs = require('fs');

function writeFromFile(filePath, data, encoding) {
    return new Promise(function(resolve, reject){
        fs.writeFile(filePath, data, encoding, function(err){
            if(err) {
                reject(err);
            }
            else{
                fs.readFile(filePath, encoding, function(err, data){
                    if(err){
                        reject(err);
                    }
                    else{
                        resolve(data);
                    }
                })
            }
        })
    })
}

writeFromFile("assignments/week-2/week-2-async-js/easy/a.txt", "You are 6 mnths away from where you want to be ...", "utf-8")
.then(function(data){
    console.log("Data is -- " + data);
})
.catch(function(err){
    console.error("Error while reading File " + err);
});

let sum = 0;
for(let i=0; i<1000000000; i++) {
    sum++;
}
console.log("Sum is " + sum);