function minTimeToVisitAllPoints(points: number[][]): number {
  let acc = 0;

  for (let i = 0; i < points.length - 1; i++) {
    let X = Math.abs(points[i][0] - points[i + 1][0]);
    let Y = Math.abs(points[i][1] - points[i + 1][1]);
    acc += Math.max(X, Y);
  }

  return acc;
}
