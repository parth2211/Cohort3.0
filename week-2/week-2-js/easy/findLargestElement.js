/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let size = numbers.length;
    if(size == 0) {
        return undefined;
    }
    else {
        let largestNum = numbers[0];
        for(let i=0; i<size; i++) {
            largestNum = Math.max(largestNum, numbers[i]);
        }
        return largestNum;
    }
}

module.exports = findLargestElement;