function countGoodRectangles(rectangles: number[][]): number {
  let min = Infinity;
  const ans = [];

  for (let i = 0; i < rectangles.length; i++) {
    min = Math.min(...rectangles[i]);
    ans.push(min);
  }

  const bigS = Math.max(...ans);

  return ans.filter((n) => n === bigS).length;
}
