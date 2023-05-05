// Given a non-empty array containing only non-negative integers, return the list with trailing and leading zeroes removed.
// Example:
// > removeZeroes([0, 0, 0, 3, 1, 4, 1, 5, 9, 0, 0, 0, 0])
// > [3, 1, 4, 1, 5, 9]
// > removeZeroes([0, 0, 0])
// > []
// > removeZeroes([8])
// > [8]

const assert = require('assert');

function removeZeroes(arr) {
    // copy the array into new variable
    let resultArray = [...arr];
    let leadingZero = true
    let trailingZero = true
    
    // remove leading zero
    while (leadingZero ){
        if (resultArray[0] === 0){
            resultArray.shift();
        } else {
            leadingZero = false;
        }
    }

    // remove trailing zeros
    while (trailingZero){
        if (resultArray[resultArray.length -1] === 0){
            // remove trailing zeros
            resultArray.pop();
        } else {
            trailingZero = false;
        }
    }
    console.log(resultArray)
    return resultArray;
}

assert.deepEqual(removeZeroes([0, 0, 0, 3, 1, 4, 1, 5, 9, 0, 0, 0, 0]), [3, 1, 4, 1, 5, 9]);
assert.deepEqual(removeZeroes([0, 0, 0]), []);
assert.deepEqual(removeZeroes([8]), [8]);
