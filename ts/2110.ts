function getDescentPeriods(prices: number[]): number {
  let ans = 0;
  let inARow = 1;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] === prices[i - 1] - 1) {
      inARow++;
    } else {
      inARow = 1;
    }
    ans += inARow;
  }

  return ans;
}
