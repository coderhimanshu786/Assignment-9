//Complexity
//Time Complexity - O(n)
//Space Complexity - O(1)
//function for max recurssion occurs in an given array
function findMaxRecurssion(arr, n){
    if(n===0) return arr[0];
    return Math.max(arr[n-1], findMaxRecurssion(arr, n-1));
};
let arr = [1, 4, 3, -5, -4, 8, 6];
//let arr = [1, 4, 45, 6, 10, -8];
let n = arr.length;
console.log(`The array of an element has max recurssion occurs is ` + findMaxRecurssion(arr, n));