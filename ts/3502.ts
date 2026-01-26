function minCosts(cost: number[]): number[] {
  const ans: number[] = [];

  for (let i = 0; i < cost.length; i++) {
    let min = Infinity;
    for (let j = 0; j <= i; j++) {
      min = Math.min(min, cost[j]);
    }
    ans.push(min);
  }

  return ans;
}
