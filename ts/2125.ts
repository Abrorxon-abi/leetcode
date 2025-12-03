function numberOfBeams(bank: string[]): number {
  let ans = 0;
  let counter = 0;

  for (let i = 0; i < bank.length; i++) {
    const row = bank[i];
    let devices = 0;

    for (let j = 0; j < row.length; j++) {
      if (row[j] === "1") devices++;
    }

    if (devices > 0) {
      ans += devices * counter;
      counter = devices;
    }
  }

  return ans;
}
