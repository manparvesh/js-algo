'use strict';

let assert = require('assert');

function co(s){
	console.log(s);
}

class Node{
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class LinkedList{
	constructor(){
		this.head = null;
	}

	insertAtEnd(value){
		let newNode = new Node(value);
		if(this.head == null){
			this.head = newNode;
		}else{
			let tempNode = this.head;
			while(tempNode.next != null) tempNode = tempNode.next;
			tempNode.next = newNode;
		}
	}

	// print funtion
	print(){
		let tempNode = this.head;
		let tempArray = new Array();
		while(tempNode){
			tempArray.push(tempNode.value);
			tempNode = tempNode.next;
		}
		co(tempArray);
	}

	insertAtBeginning(value){
		let newNode = new Node(value);
		if(this.head == null){
			this.head = newNode;
		}else{
			let tempNode = this.head;
			newNode.next = tempNode;
			this.head = newNode;
		}
	}

	getHead(){
		return this.head.value;
	}

	getLength(){
		let length = 0;
		let tempNode = this.head;
		while(tempNode){
			length++;
			tempNode = tempNode.next;
		}
		return length;
	}

	search(value){
		let position = 0;
		let tempNode = this.head;
		while(tempNode != null && tempNode.value != value){
			tempNode = tempNode.next;
			position++;
		}
		return position;
	}

	// O(n)
	reverse(){
		let currentNode = this.head;
		let prevNode = null;
		let nextNode;

		while(currentNode != null){
			nextNode = currentNode.next;
			currentNode.next = prevNode;
			prevNode = currentNode;
			currentNode = nextNode;
		}

		this.head = prevNode;
	}
}

// testing code
let list = new LinkedList();
list.insertAtEnd(1);
// [1]
assert.deepStrictEqual(list.getHead(), 1);
assert.deepStrictEqual(list.getLength(), 1);
assert.deepStrictEqual(list.search(1), 0);

list.insertAtEnd(2);
// [1, 2]
assert.deepStrictEqual(list.getHead(), 1);
assert.deepStrictEqual(list.getLength(), 2);
assert.deepStrictEqual(list.search(2), 1);

list.insertAtBeginning(3);
// [3, 1, 2]
assert.deepStrictEqual(list.getHead(), 3);
assert.deepStrictEqual(list.getLength(), 3);
assert.deepStrictEqual(list.search(3), 0);

list.reverse();
// [2, 1, 3]
assert.deepStrictEqual(list.getHead(), 2);
assert.deepStrictEqual(list.getLength(), 3);
assert.deepStrictEqual(list.search(3), 2);

// all asserts passed, so our implementation is okay
console.log("[OK] Linked List");