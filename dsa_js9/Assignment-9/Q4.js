//Complexity
//Time Complexity - O(n)
//Space Complexity - O(1)
//funtion to solve of an integer
function myPower(x, n){
    let pow = 1;
    //traverse a number
    for(let i=0; i<n; i++){
        pow = pow * x;
    }
    return pow;
};
console.log(myPower(5, 2));
console.log(myPower(2, 5));