// Your code here.
const checkObj = (a) => (a && typeof a === "object");

const checkKey = (a,b) => {
  let valid = true;
  Object.keys(a).forEach((key1) => {
    let contain = false;
    Object.keys(b).forEach((key2) => {
    	if (deepEqual(key1, key2) && deepEqual(a[key1], b[key2])) contain = true;
  	});
    if (!contain) {
     	valid = false;
      	return false;
    }
  });
  return valid
};
                       
const deepEqualObj = (a, b) => {
  if (!checkKey(a, b)) return false;
  return checkKey(b, a);
};
                       
const deepEqual = (a, b) => {
	if(checkObj(a) && checkObj(b)) return deepEqualObj(a, b);
  	return a === b;
};

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true