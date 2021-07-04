let arrays = [[1, 2, 3], [4, 5], [6]];
arr = arrays.reduce((a, b) => a.concat(b));
console.log(arr);
// → [1, 2, 3, 4, 5, 6]