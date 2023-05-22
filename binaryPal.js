// Write a function to find out whether the binary representation of a number is palindrome or not.
// > binaryPal(5)
// > true

// > binaryPal(10)
// > false

const assert = require('assert');

function binaryPal(num){
  let bin = num.toString(2);
  let rev = bin.split('').reverse().join('');
  return bin === rev;
}

// Test Values
const trueValues = [1,3,5,7,9,15,17,21,27,31,33,45,51,63,65,73,85,93,99];
const falseValues = [2,4,6,8,10,11,12,13,14,16,18,19,20,22,23,24,25,26,28];

// Test for true
for (let i = 0; i < trueValues.length; i++){
  assert(binaryPal(trueValues[i]) === true)
}

// Test for false
for (let i = 0; i < falseValues.length; i++){
  assert(binaryPal(falseValues[i]) === false)
}




