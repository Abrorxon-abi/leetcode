function countPoints(points: number[][], queries: number[][]): number[] {
  const ans = [];

  for (let i = 0; i < queries.length; i++) {
    let counter = 0;
    for (let j = 0; j < points.length; j++) {
      if (
        Math.pow(points[j][0] - queries[i][0], 2) +
          Math.pow(points[j][1] - queries[i][1], 2) <=
        Math.pow(queries[i][2], 2)
      ) {
        counter++;
      }
    }

    ans.push(counter);
  }

  return ans;
}
