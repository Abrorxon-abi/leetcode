// Problem Statement: https://leetcode.com/problems/guess-number-higher-or-lower/description/

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
  let left = 0;
  let right = n + 1;

  while (right - left > 1) {
    let mid = Math.floor((right + left) / 2);
    let res = guess(mid);

    if (res === 0) {
      return mid;
    }

    if (res === -1) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return -1;
}
