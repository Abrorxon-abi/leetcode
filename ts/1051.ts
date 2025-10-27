// Problem Statement: https://leetcode.com/problems/height-checker/description/

function heightChecker(heights: number[]): number {
  const expected = heights.toSorted((a, b) => a - b);
  let counter = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] != expected[i]) counter++;
  }
  return counter;
}
