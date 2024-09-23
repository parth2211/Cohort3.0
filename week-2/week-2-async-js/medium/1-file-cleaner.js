const fs = require("fs");

function cleanData(data) {
    let newData = data.replace(/\s+/g,' ').trim();
    return newData;
}

function showError(err) {
    console.log("Error is " + err);
}

function showFileData(data) {
    console.log("Data read from file is : " + data);
}

function readFromFile(filePath, encoding) {
    return new Promise(function(resolve, reject){
        fs.readFile(filePath, encoding, function(err, data){
            if(err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        })
    })
}

function writeToFile(filePath, data, encoding) {
    return new Promise(function(resolve, reject){
        fs.writeFile(filePath, data, encoding, function(err){
            if(err) {
                reject(err);
            }
            else {
                resolve();
            }
        })
    })
}

async function cleanFile(filePath, encoding) {
    console.log("Hello");
    
    let data = await readFromFile(filePath, encoding);
    console.log("Data received --- " + data);

    let trimmeddData = cleanData(data);
    
    await writeToFile(filePath, trimmeddData, encoding)
    
    data = await readFromFile(filePath, encoding)
    console.log("After reading from updated file : " + data);

    showFileData(data);
}

cleanFile("assignments/week-2/week-2-async-js/medium/b.txt", "utf-8");
console.log("Program started ...")