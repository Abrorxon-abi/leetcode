// Problem Statement: https://leetcode.com/problems/palindrome-number/description/

function isPalindrome(x: number): boolean {
  const reversed = Number(x.toString().split("").reverse().join(""));
  return x === reversed ? true : false;
}
