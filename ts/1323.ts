// Problem Statement: https://leetcode.com/problems/maximum-69-number/description/

function maximum69Number(num: number): number {
  let numArr = num.toString().split("");
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === "6") {
      numArr[i] = "9";
      return +numArr.join("");
    }
  }

  return num;
}
