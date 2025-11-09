function xorOperation(n: number, start: number): number {
  let acc = 0;

  for (let i = 0; i < n; i++) {
    acc ^= start + 2 * i;
  }

  return acc;
}
