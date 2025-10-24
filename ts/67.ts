// Problem Statement: https://leetcode.com/problems/add-binary/description/

function addBinary(a: string, b: string): string {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
}
