/*Program which takes in the first unit and multiplies it up to the second number:


examples:

(10, 5) = 10, 20, 30, 40, 50
(2, 9) = 2, 4, 6, 8, 10, 12, 14, 16, 18 
*/

function arrayOfMultiples (num, length) {
    var total = 0;
    var result = [];
    for (var i = 1; i <= length; i++) {
        total = num * i;
        result.push(total);
    }
    return result;
}

console.log(arrayOfMultiples(10, 5))