function findKthPositive(arr: number[], k: number): number {
  let missedNums = [];

  for (let i = 0; missedNums.length !== k; i++) {
    if (!arr.includes(i + 1)) {
      missedNums.push(i + 1);
    }
  }

  return missedNums[k - 1];
}
