'use strict';

let assert = require('assert');

class TreeNode{
	constructor(data){
		this.data = data;
		this.leftChild = null;
		this.rightChild = null;
	}

	insertLeftChild(data){
		this.leftChild = new TreeNode(data);
	}

	insertRightChild(data){
		this.rightChild = new TreeNode(data);
	}
}

function getHeight(node){
	if(node == null) return 0;
	return 1 + Math.max(getHeight(node.leftChild), getHeight(node.rightChild));
}

function getSize(node){
	if(node == null) return 0;
	return 1 + getSize(node.leftChild) + getSize(node.rightChild);
}


// testing code
let node = new TreeNode(3);
assert.deepStrictEqual(getHeight(node), 1);
assert.deepStrictEqual(getSize(node), 1);

node.insertRightChild(4);
node.insertLeftChild(2);
assert.deepStrictEqual(getHeight(node), 2);
assert.deepStrictEqual(getSize(node), 3);

node.leftChild.insertRightChild(4);
node.rightChild.insertLeftChild(2);
assert.deepStrictEqual(getHeight(node), 3);
assert.deepStrictEqual(getSize(node), 5);

// all asserts passed, so our implementation is okay
console.log("[OK] Normal binary tree");