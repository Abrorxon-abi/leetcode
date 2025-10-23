// Problem Statement: https://leetcode.com/problems/container-with-most-water/description/

function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(max, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}
