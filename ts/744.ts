// Problem Statement: https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/

function nextGreatestLetter(letters: string[], target: string): string {
  let left = -1;
  let right = letters.length;

  while (right - left > 1) {
    let mid = Math.floor((right + left) / 2);

    if (letters[mid] > target) {
      right = mid;
    } else {
      left = mid;
    }
  }

  if (right === letters.length) {
    return letters[0];
  }

  return letters[right];
}
