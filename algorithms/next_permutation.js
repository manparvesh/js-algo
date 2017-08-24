function co(s){
    console.log(s);
}

let assert = require('assert');

function next_permutation(s){
    // 1 2 3 1 2
    // starting from the end, getting the first occurence of increasing 
    let i = s.length - 1;
    while(i > 0 && s[i-1]>=s[i]) i--;
    
    // case when the array or string is already the last permutation
    if(i <= 0) return {
        result: false,
        string: null
    };
    
    // s[i-1] = pivot
    // find rightmost point that exceeds the pivot
    let j = s.length - 1;
    while(s[j] <= s[i-1]){
        j--;
    }
    
    // swap pivot with j
    let temp = s[i-1];
    s[i-1] = s[j];
    s[j] = temp;
    
    // reverse the suffix part
    j = s.length-1;
    while(i<j){
        temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
    
    return {
        result: true,
        string: s
    };
}

// testing code
let s = [1, 2, 3]
np = next_permutation(s)
while(np.result){
    s = np.string
    // co(s)
    np = next_permutation(s)
}

assert.deepStrictEqual(s, [3, 2, 1]);

// all asserts passed, so our implementation is okay
console.log("[OK] Next Permutation");
