'use strict';

let assert = require('assert');

/*
Incomplete
*/

function co(s){
	console.log(s);
}

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
		if(!this.hasLeftChild(parentIndex)) return -1;
		return parentIndex * 2 + 1;
	}

	getRightChild(parentIndex){
		if(!this.hasRightChild(parentIndex)) return -1;
		return parentIndex * 2 + 2;
	}

	// get min (this is a min heap)
	getMin(){
		if(this.size() == 0) return null;
		return this.array[0];
	}

	// used to convert the array to a min heap
	heapify(parentIndex){
		let leftChildIndex = this.getLeftChild(parentIndex); 
		let rightChildIndex = this.getRightChild(parentIndex);
		if(leftChildIndex == -1 && rightChildIndex == -1) return;

		// find next minimum element that can be swapped with the parent element
		// co(this.array[parentIndex].toString() + ' ' + this.array[leftChildIndex].toString() + ' ' + this.array[rightChildIndex].toString())
		let minElement = parentIndex;
		if(leftChildIndex != -1){
			if(this.array[leftChildIndex] < this.array[minElement]){
				minElement = leftChildIndex;
			}
		}

		if(rightChildIndex != -1){
			if(this.array[rightChildIndex] < this.array[minElement]){
				minElement = rightChildIndex;
			}
		}

		if(minElement == -1) return;

		// co(this.array.toString() + " " + this.array[parentIndex].toString() + ' ' + this.array[leftChildIndex].toString() + ' ' + this.array[rightChildIndex].toString() + ' ' + this.array[minElement].toString());
		// swap minElement with parent
		if(minElement != parentIndex){
			let temp = this.array[minElement];
			this.array[minElement] = this.array[parentIndex];
			this.array[parentIndex] = temp;

			this.heapify(minElement);
		}

		// this.heapify(leftChildIndex);
		// this.heapify(rightChildIndex);
		
	}

	sort(){
		for(let i = this.size() / 2 - 1; i >= 0; i--){
			this.heapify(i);
		}
	}

	insert(data){
		let i = this.size() - 1;
		while(i > 0 && data < this.array[this.getParent(i)]){
			this.array[i] = this.array[this.getParent(i)];
			i = this.getParent(i);
		}
		this.array[i] = data;
	}

	print(){
		console.log("Printing this heap:");
		console.log(this.array);
	}

	createHeapFromArray(ar){
		this.array = ar;
		this.sort();
	}

	// bubbleUp()
}

// first complete implementation, then un-comment

// testing code
// let heap = new Heap();
// let temp_array = [4, 2, 1, 5, 6, 7, 10, 8 ,9];
// co('Initial array: ' + temp_array.toString())
// heap.createHeapFromArray(temp_array);
// heap.print();
// console.log(heap.getMin());
// heap.insert(3);
// heap.print();

// all asserts passed, so our implementation is okay
console.log("[INCOMPLETE] Linked List");