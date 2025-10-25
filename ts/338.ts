// Problem Statement: https://leetcode.com/problems/counting-bits/description/

function countBits(n: number): number[] {
  return Array.from({ length: n + 1 }, (_, num) => {
    return num.toString(2).split("1").length - 1;
  });
}
