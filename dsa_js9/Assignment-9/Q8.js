//Complexity
//Time Complexity - O(n)
//Space Complexity - O(1)
//function to prodeuct of an given array
function productOf(arr){
    //initialized result
    let result = 1;
//traverse over an array
    for(let i=0; i<arr.length; i++)
    //initialize result then print
    result = result * arr[i];
    return result;
};
console.log(productOf([1, 2, 3, 4, 5]));