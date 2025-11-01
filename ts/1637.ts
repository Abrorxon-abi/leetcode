function maxWidthOfVerticalArea(points: number[][]): number {
  const xArr = [];
  let max = 0;

  for (let i = 0; i < points.length; i++) {
    xArr.push(points[i][0]);
  }

  xArr.sort((a, b) => a - b);

  for (let i = 0; i < xArr.length - 1; i++) {
    max = Math.max(max, xArr[i + 1] - xArr[i]);
  }

  return max;
}
