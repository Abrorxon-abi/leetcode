function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const ans = [];
  let max = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      ans.push(true);
    } else {
      ans.push(false);
    }
  }

  return ans;
}
