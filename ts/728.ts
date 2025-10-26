// Problem Statement: https://leetcode.com/problems/self-dividing-numbers/description/

function selfDividingNumbers(left: number, right: number): number[] {
  const arr = [];

  for (let i = left; i <= right; i++) {
    let numStr = i.toString();
    let numArr = numStr.split("");
    let isValid = true;

    for (let j = 0; j < numArr.length; j++) {
      let digit = Number(numArr[j]);
      if (digit === 0 || i % digit !== 0) {
        isValid = false;
      }
    }

    if (isValid) {
      arr.push(i);
    }
  }

  return arr;
}
