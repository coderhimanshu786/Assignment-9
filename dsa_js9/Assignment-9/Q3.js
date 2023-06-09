//Complexity
//Time Complexity - O(n)
//Space Complexity - O(1)

//function to find factorial of a number
let findFactorial = (n)=>{
    // if number is equal to zero then return 1 otherwise apply to factorial formula to find fact. of a number
    if(n==0) return 1;
    return findFactorial(n-1)*n;
}
console.log(findFactorial(5));
console.log(findFactorial(4));