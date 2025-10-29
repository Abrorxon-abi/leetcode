// Problem Statement: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/

function countNegatives(grid: number[][]): number {
  let acc = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] < 0) {
        acc += 1;
      }
    }
  }

  return acc;
}
