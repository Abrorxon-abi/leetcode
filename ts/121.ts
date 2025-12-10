function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let cheapest = Infinity;

  for (let i = 0; i < prices.length; i++) {
    cheapest = Math.min(cheapest, prices[i]);
    maxProfit = Math.max(prices[i] - cheapest, maxProfit);
  }

  return maxProfit;
}
