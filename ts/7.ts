// Problem Statement: https://leetcode.com/problems/reverse-integer/description/

function reverse(x: number): number {
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  const sign = Math.sign(x);

  let str = Math.abs(x).toString().split("").reverse().join("");
  const reversed = sign * Number(str);

  return reversed > INT_MAX || reversed < INT_MIN ? 0 : reversed;
}
