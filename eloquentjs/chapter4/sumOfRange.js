// Your code here.
const range = (start, end, inc=1) => {
  let arr = [];
  
  if (inc >= 1) for (i = start; i <= end; i+=inc)
    arr.push(i);
  else for (i = start; i >= end; i+=inc)
    arr.push(i);
  return arr;
}

const sum = (arr) => arr.reduce((a,b) => a + b);
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55