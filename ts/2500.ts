function deleteGreatestValue(grid: number[][]): number {
  let acc = 0;

  grid.forEach((innerArray) => {
    innerArray.sort((a, b) => b - a);
  });

  for (let i = 0; i < grid[0].length; i++) {
    let max = 0;

    for (let j = 0; j < grid.length; j++) {
      max = Math.max(max, grid[j][i]);
    }

    acc += max;
  }

  return acc;
}
