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

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false