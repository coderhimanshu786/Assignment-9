//Complexity
//Time Complexity - O(n)
//Space Complexity - O(1)

//function to run the task is to find Nth term of the series.
function nTermAP(a, d, N){
    //formula for the AP series
    return (a + (N - 1) * d);
};
console.log(`The fifth term of the series is ` + nTermAP(2, 1, 5));
console.log(`The fifth term of the series is ` + nTermAP(5, 2, 10));