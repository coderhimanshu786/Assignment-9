//Complexity
//Time Complexity - O(n)
//Space Complexity - O(1)

//function for sum fo nth terms
let findSum = (n) => {

  let sum = 0;
  //traverse integer
  for (let x = 1; x <= n; x++)
  //sum of nth number 
    sum += x;
    return sum;
  
};
console.log(findSum(3));
console.log(findSum(5));
