const assert = require('assert');

const fractionMath = (fraction1, operator, fraction2) => {
  const mathOperators = new Set(['add', 'subtract', 'multiply', 'divide']);

  // Check if operator is valid
  if (!mathOperators.has(operator)) {
    return 'Error: Invalid operator';
  }
  const [numerator1, denominator1] = fraction1.split('/');
  const [numerator2, denominator2] = fraction2.split('/');

  // Calls the reduceFraction function passing in operations call and destructuring the return value
  [numerator, denominator] = reduceFraction(...operations[operator](numerator1, denominator1, numerator2, denominator2));

  return `${numerator}/${denominator}`;
};

const add = (numerator1, denominator1, numerator2, denominator2) => {
  let numerator = numerator1 * denominator2 + numerator2 * denominator1;
  let denominator = denominator1 * denominator2;
  return [ numerator, denominator];
};

const subtract = (numerator1, denominator1, numerator2, denominator2) => {
  let numerator = numerator1 * denominator2 - numerator2 * denominator1;
  let denominator = denominator1 * denominator2;
  return [ numerator, denominator];
};

const multiply = (numerator1, denominator1, numerator2, denominator2) => {
  let numerator = numerator1 * numerator2;
  let denominator = denominator1 * denominator2;
  return [ numerator, denominator];
};

const divide = (numerator1, denominator1, numerator2, denominator2) => {
  // multiply reciprocals
  return multiply(numerator1, denominator1, denominator2, numerator2);
};

const reduceFraction = (numerator, denominator) => {
  // find greatest common factor  
  let greatestCommonFactor = 1;
  for (let i = 1; i <= numerator && i <= denominator; i++) {
    if (numerator % i === 0 && denominator % i === 0) {
      greatestCommonFactor = i;
    }
  }
  // Calculate new numerator and denominator
  let newNumerator = numerator / greatestCommonFactor;
  let newDenominator = denominator / greatestCommonFactor;
  return [newNumerator, newDenominator];
};

// Object to store the operations functions
const operations = {
  add,
  subtract,
  multiply,
  divide
};






// Test Valid Addition
assert.strictEqual(fractionMath("1/2", "add", "2/3"), "7/6");
assert.strictEqual(fractionMath('1/2', 'add', '3/4'), '5/4');
assert.strictEqual(fractionMath('2/3', 'add', '4/5'), '22/15');

// // Test Valid Subtraction
assert.strictEqual(fractionMath("2/3", "subtract", "1/2"), "1/6");
assert.strictEqual(fractionMath('4/5', 'subtract', '1/2'), '3/10');
assert.strictEqual(fractionMath('7/8', 'subtract', '3/4'), '1/8');

// Test Valid Multiplication
assert.strictEqual(fractionMath("1/2", "multiply", "2/3"), "1/3");
assert.strictEqual(fractionMath('2/3', 'multiply', '4/5'), '8/15');
assert.strictEqual(fractionMath('1/2', 'multiply', '3/4'), '3/8');
assert.strictEqual(fractionMath("1/2", "multiply", "2/4"), "1/4");

// Test Valid Division
assert.strictEqual(fractionMath("2/3", "divide", "1/2"), "4/3");
assert.strictEqual(fractionMath('2/3', 'divide', '4/5'), '5/6');
assert.strictEqual(fractionMath('1/2', 'divide', '3/4'), '2/3');


// Test Invalid Operator
assert.strictEqual(fractionMath("1/2", "invalid", "2/3"), "Error: Invalid operator");

