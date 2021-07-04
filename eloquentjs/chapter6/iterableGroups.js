// Your code here (and the code from the previous exercise)
class Group {
  constructor () {
  	this.group = [];
  }
  
  add (value) {
  	if(!this.has(value)) this.group.push(value); 
  }
  
  has (value) {
  	return this.group.includes(value); 
  }
  
  delete (value) {
   	const pos = this.group.indexOf(value);
    if (pos > -1) this.group.splice(pos, 1);
  }
  
  static from (itr) {
    let group = new Group();
    for (const i of itr) {
      group.add(i);
    }
    return group;
  }
}

class GroupIterator {
  constructor(group) {
    this.x = 0;
    this.group = group;
  }

  next() {
    if (this.x == this.group.group.length) return {done: true};

    let value = this.group.group[this.x];
    this.x++;
    return {value, done: false};
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c