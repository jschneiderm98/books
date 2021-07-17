// Your code here.
const isEven = (num) => {
  const find = (n) => {
    if (n === 0) return true;
    else if (n === 1) return false;
    else return find(n - 2);
  }
  return num < 0 ? undefined : find(num);
}



console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??