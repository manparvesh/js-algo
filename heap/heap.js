'use strict';

class Heap{
	constructor(){
		this.array = new Array();
	}

	size(){
		return this.array.length;
	}

	getParent(childIndex){
		return childIndex <= 0 ? -1 : (childIndex - 1) / 2;
	}

	hasLeftChild(parentIndex){
		return (parentIndex * 2 + 1 < this.size()) && parentIndex >= 0;
	}

	hasRightChild(parentIndex){
		return (parentIndex * 2 + 2 < this.size()) && parentIndex >= 0;
	}

	getLeftChild(parentIndex){
		if(!hasLeftChild(parentIndex)) return -1;
		return parentIndex * 2 + 1;
	}

	getRightChild(parentIndex){
		if(!hasRightChild(parentIndex)) return -1;
		return parentIndex * 2 + 2;
	}

	// get min (this is a min heap)
	getMin(){
		if(this.size() == 0) return null;
		return this.array[0];
	}

	
}