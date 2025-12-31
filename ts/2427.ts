function commonFactors(a: number, b: number): number {
  let acc = 0;

  let min = Math.min(a, b);
  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) acc++;
  }

  return acc;
}
