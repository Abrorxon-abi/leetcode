// Problem Statement: https://leetcode.com/problems/plus-one/description/

function plusOne(digits: number[]): number[] {
  let number = BigInt(digits.join("")) + 1n;
  return number.toString().split("").map(Number);
}
