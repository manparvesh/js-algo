'use strict';

class Queue{
	constructor(){
		this.ar = new Array();
	}

	enqueue(n){
		this.ar.push(n);
	}

	dequeue(){
		let n = this.ar[0];
		this.ar.shift();
		return n;
	}

	front(){
		return this.ar[0];
	}

	print(){
		console.log(this.ar);
	}

	isEmpty(){
		return this.ar.length == 0;
	}
}

// testing 
let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
q.enqueue(7);
q.print();
q.dequeue();
q.print();
console.log(q.front());
