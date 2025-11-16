function numSub(s: string): number {
  const MOD = 10 ** 9 + 7;
  let acc = 0;
  let ones = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "0") {
      acc = (acc + sum(ones)) % MOD;
      ones = 0;
    } else {
      ones++;
    }
  }

  if (ones > 0) {
    acc = (acc + sum(ones)) % MOD;
  }

  return acc;
}

function sum(n: number) {
  let acc = 0;

  for (let i = 1; i <= n; i++) {
    acc += i;
  }

  return acc;
}
