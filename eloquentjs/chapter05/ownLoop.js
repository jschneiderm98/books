// Your code here.
const loop = (value, testfn, updatefn, bodyfn) => {
  while (testfn(value)){
   	bodyfn(value);
	value = updatefn(value); 
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1