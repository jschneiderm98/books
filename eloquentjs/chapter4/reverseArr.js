const reverseArray = (arr) => arr.map((val, i, arr) => arr[arr.length - 1 - i]);
const reverseArrayInPlace = (arr) => arr.forEach((val, i, array) => array.unshift(array.pop()));
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]