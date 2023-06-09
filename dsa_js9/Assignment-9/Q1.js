//repetiton of same function calling itself again and again or function calling itself is known as recurssion
//basecase when the recurssion stop, if no basecase then it is not to stop at all in a  system

//function that determine a power of two is or isnot
function isPowerTwo(n){
    return n > 0 && (n && n-1) == 0;
};
console.log(isPowerTwo(1));         //True
console.log(isPowerTwo(3));     //false
