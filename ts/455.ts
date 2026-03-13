function findContentChildren(g: number[], s: number[]): number {
  let acc = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let j = 0;

  for (let i = 0; i < g.length; i++) {
    while (s[j] < g[i] && j <= s.length - 1) {
      j++;
    }
    if (s[j] >= g[i]) {
      acc++;
      j++;
    }
  }

  return acc;
}
