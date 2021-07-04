// Your code here.
const arrayToList = (arr) => {
  const list = {};
  let isEmpty = true, aux = list;
  arr.forEach((num) => {
    if (isEmpty) {
      list.value = num;
      list.rest = null;
      isEmpty = false;
    }
    else {
      const newNode = {value: num, rest:null};
      aux.rest = newNode;
      aux = aux.rest;
    }
  });
  return list;
}

const listToArray = (list) => {
  let arr = [], aux = list;
  while(aux){
    arr.push(aux.value);
    aux = aux.rest;
  }
  return arr;
}

const prepend = (value, list) => {
 	return {value, rest: list}; 
}

const nth = (list, index) => {
  if(!list) return null;
  if(index === 0) return list.value;
  return nth(list.rest, index-1);
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20