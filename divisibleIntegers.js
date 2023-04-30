/* Given an array of integers, find whether it’s possible to construct an integer using all the
digits of the numbers in the array such that it would be divisible by n (where n is 1 <= n <= 9). 
If it’s possible, return true, else return false.
*/

function divisibleIntegers(n, arr) {
    let sum = arr.reduce((acum, cur) => {
        return acum + parseInt(cur);
    }, 0)
    console.log(sum)
    return sum % n === 0;
}
