// Problem Statement: https://leetcode.com/problems/check-if-n-and-its-double-exist/description/

function checkIfExist(arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      if (arr[i] === arr[j] * 2) {
        return true;
      }
    }
  }

  return false;
}
