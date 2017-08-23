'use strict';

class DisjointSet{
    // constructor function
    constructor(n){
        this.id = new Array(n);
        this.size = new Array(n);
        this.count = n;
        
        // set ids for al elements and size of all to 1
        for(let i=0;i<n;i++){
            this.id[i] = i;
            this.size[i] = 1;
        }
    }
    
    getCount(){
        return this.count;
    }
    
    // return id of component correspoding to object n
    find(n){
        let root = n;
        while(root != this.id[root]) root = this.id[root];
        
        while(n != root){
            let new_n = this.id[n];
            this.id[n] = root;
            n = new_n;
        }
        
        return root;
    }
    
    // union function
    union(x, y){
        let i = this.find(x);
        let j = this.find(y);
        
        if(i==j) return;
        
        // make smaller root point to larger one
        if(this.size[i] < this.size[j]){
            this.id[i] = j;
            this.size[j] += this.size[i];
        }else{
            this.id[j] = i;
            this.size[i] += this.size[j];
        }
        
        this.count--;
    }
    
    connected(x, y){
        return this.find(x) == this.find(y);
    }
}

// testing code
let ds = new DisjointSet(10);
ds.union(4, 5);
ds.union(1, 2);
ds.union(2, 4);
console.log(ds.connected(1, 5)); // true
console.log(ds.connected(1, 3)); // false