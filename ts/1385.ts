// Problem Statement: https://leetcode.com/problems/find-the-distance-value-between-two-arrays/description/

function findTheDistanceValue(
  arr1: number[],
  arr2: number[],
  d: number
): number {
  const copy = [...arr1];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        copy.shift();
        break;
      }
    }
  }

  return copy.length;
}
