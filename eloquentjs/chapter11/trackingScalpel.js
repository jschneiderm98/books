async function locateScalpel(nest) {
  let current = nest.name;
  let target = await anyStorage(nest, nest.name, "scalpel");
  while(target != current){
    current = target;
    target = await anyStorage(nest, current, "scalpel");
  }
  return target;
}

function locateScalpel2(nest) {
  const recursion = (current) => {
    return anyStorage(nest, current, "scalpel").then((value) => {
      if(value == current) return value;
        else return recursion(value);
    });
  }
  return recursion(nest.name);
}




locateScalpel(bigOak).then(console.log);
// → Butcher Shop
locateScalpel2(bigOak).then(console.log);