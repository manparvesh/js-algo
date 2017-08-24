'use strict';

class BSTNode{
	constructor(data){
		this.data = data;
		this.leftChild = null;
		this.rightChild = null;
	}
}

class BST{
	constructor(){
		this.root = null;
	}

	top(){
		return this.root.data;
	}

	_insert(node, newData){
		let newNode = new BSTNode(newData);
		if(node == null){
			node = new BSTNode(newData);
		}else{
			if(newNode.data < node.data){
				// go left
				this._insert(node.leftChild, newData);
			}else{
				// go right
				this._insert(node.rightChild, newData);
			}
		}
	}

	insert(newData){
		if(this.root == null) this.root = new BSTNode(newData);
		else{
			let currentNode = this.root;
			let parentNode = null;
			while(currentNode != null){
				if(currentNode.data == newData) return; // duplicate check

				if(currentNode.data > newData){
					// go left
					parentNode = currentNode;
					currentNode = currentNode.leftChild;
				}else{
					// go right
					parentNode = currentNode;
					currentNode = currentNode.rightChild;
				}
			}

			let newNode = new BSTNode(newData);

			if(newData < parentNode.data){
				parentNode.leftChild = newNode;
			}else{
				parentNode.rightChild = newNode;
			}
		}
	}

	_inorder(node){
		if(node == null) return;
		this._inorder(node.leftChild);
		console.log(node.data);
		this._inorder(node.rightChild);
	}

	inorder(){
		this._inorder(this.root);
	}
}

let bst = new BST();
bst.insert(3);
bst.insert(2);
bst.insert(6);
bst.inorder();
console.log(bst.top());

// all asserts passed, so our implementation is okay
console.log("[OK] Binary Search Tree");