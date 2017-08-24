'use strict';

let assert = require('assert');

class Stack{
	constructor(capacity){
		this.capacity = capacity;
		this.array = new Array();
	}

	getCapacity(){
		return this.capacity;
	}

	getSize(){
		return this.array.length;
	}

	push(item){
		if(this.getCapacity() <= this.getSize()) return;
		this.array.push(item);
	}

	top(){
		return this.array[this.getSize() - 1];
	}

	pop(){
		let top = this.top();
		this.array.pop();
		return top;
	}

	print(){
		console.log(this.array);
	}
}

// testing code
let stack = new Stack(10);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
assert.deepStrictEqual(stack.getSize(), 5);

let poppedItem = stack.pop();
assert.deepStrictEqual(poppedItem, 5);
assert.deepStrictEqual(stack.getSize(), 4);

// all asserts passed, so our implementation is okay
console.log("[OK] Stack");
