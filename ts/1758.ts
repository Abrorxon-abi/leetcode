function minOperations(s: string): number {
  let ans = 0;
  let acc = 0;

  for (let i = 0; i < s.length; i++) {
    const expected = i % 2 === 0 ? "0" : "1";
    if (s[i] !== expected) acc++;
  }

  ans = acc;
  acc = 0;

  for (let i = 0; i < s.length; i++) {
    const expected = i % 2 === 0 ? "1" : "0";
    if (s[i] !== expected) acc++;
  }

  return Math.min(ans, acc);
}
