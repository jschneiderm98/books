let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(Object.getPrototypeOf(map).hasOwnProperty.call(map,"one"));
// → true
