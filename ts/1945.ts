function getLucky(s: string, k: number): number {
  let sum = [...s]
    .reduce((acc, ch) => (acc += String(ch.charCodeAt(0) - 96)), "")
    .split("")
    .reduce((acc, ch) => (acc += Number(ch)), 0);

  for (let i = 1; i < k; i++) {
    sum = [...String(sum)].reduce((acc, ch) => (acc += Number(ch)), 0);
  }

  return sum;
}
