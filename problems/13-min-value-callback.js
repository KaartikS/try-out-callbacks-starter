/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function (array, ...cb) {
    let smallestValue = Infinity;

    for (let i = 0; i < array.length; i++) {
        let currentEl = array[i];
        if (currentEl < smallestValue) {
            smallestValue = currentEl;
        }
    }

    if (cb.length === 1) {
        let result = cb[0](smallestValue);
        return result;
    }
    else {
        return smallestValue;
    }
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
