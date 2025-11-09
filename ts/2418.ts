function sortPeople(names: string[], heights: number[]): string[] {
  const ans = [];
  const obj = {};
  for (let i = 0; i < names.length; i++) {
    obj[heights[i]] = names[i];
  }

  const sortedHeights = Object.keys(obj).sort((a, b) => Number(b) - Number(a));

  for (const height of sortedHeights) {
    ans.push(obj[height]);
  }

  return ans;
}
