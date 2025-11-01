function maximumWealth(accounts: number[][]): number {
  let max = 0;
  let acc = 0;

  for (let i = 0; i < accounts.length; i++) {
    for (let j = 0; j < accounts[i].length; j++) {
      acc += accounts[i][j];
    }
    if (acc > max) {
      max = acc;
    }
    acc = 0;
  }

  return max;
}
