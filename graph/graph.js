'use strict';
const assert = require('assert');

// only for debugging purposes
function co(s){
	console.log(s);
}

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

	isEmpty(){
		return this.ar.length == 0;
	}
}

class Graph{
	// create graph of this size
	constructor(n){
		this.array = new Array(n);
		for (var i = 0; i < this.array.length; i++) {
			this.array[i] = new Array();
		}
		this.visited = new Array(n);
	}

	connect(s, v){
		this.array[s].push(v);
		this.array[v].push(s);
	}

	// printing the adjacency list
	print(){
		console.log(this.array);
	}

	dfs(i){
		for(let node of this.array[i]){
			if(!this.visited[node]){
				this.visited[node] = true;
				this.dfs(node);
			}
		}
	}

	connected_components(){
		let num = 0;
		this.visited.fill(false);
		for (var i = 0; i < this.array.length; i++) {
			if(!this.visited[i]){
				num++;
				this.visited[i] = true;
				this.dfs(i);
			}
		}
		return num;
	}

	// checks if these components are connected
	bfs(i, j){
		let q = new Queue();
		// fill visited with false
		this.visited.fill(false);

		// start
		q.enqueue(i);
		this.visited[i] = true;
		while(!q.isEmpty()){
			let node = q.dequeue();
			for(let w of this.array[node]){
				if(!this.visited[w]){
					if(w == j) return true;
					q.enqueue(w);
					this.visited[w] = true;
				}
			}
		}
		return false;
	}
}

// testing 
let graph = new Graph(10);
graph.connect(1, 2);
graph.connect(2, 3);
graph.connect(4, 5);
graph.connect(6, 7);
graph.print();
console.log(graph.connected_components());
assert.deepStrictEqual(graph.connected_components(), 6);
console.log(graph.bfs(1, 7));
