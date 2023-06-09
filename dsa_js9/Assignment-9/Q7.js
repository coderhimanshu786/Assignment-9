//Complexity
//Time Complexity - O(n)
//Space Complexity - O(1)

// JavaScript Program to implements the strings in different ways
function permute(s, answer) {
  if (s.length == 0) {
    console.log(answer + " ");
  }

  for (let i = 0; i < s.length; i++) {
    //Character in a given string suffles in diff. way--
    let ch = s[i];
    let left_substr = s.slice(0, i);
    let right_substr = s.slice(i + 1);
    let rest = left_substr + right_substr;
    permute(rest, answer + ch);
  }
}

let s = "ABC";
let answer = "";
console.log("Enter the string : ");
console.log("\nAll possible string are : ");
permute(s, answer);
