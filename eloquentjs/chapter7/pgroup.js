class PGroup {
  constructor (values) {
  	this.values = values;
  }
  
  add (value) {
  	if(!this.has(value)) return new PGroup(this.values.concat(value));
    else this;
  }
  
  has (value) {
  	return this.values.includes(value); 
  }
  
  delete (value) {
   	return new PGroup(this.values.filter((item) => item !== value));
  }
}

PGroup.empty = new PGroup([]);


let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");
console.log(a);
console.log(ab);
console.log(b);
console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false