function divideArray(nums: number[], k: number): number[][] {
  nums.sort((a, b) => a - b);
  const arr = [];

  for (let i = 0; i < nums.length; i += 3) {
    const triple = nums.slice(i, i + 3);
    if (triple[2] - triple[0] > k) return [];
    arr.push(triple);
  }

  return arr;
}
