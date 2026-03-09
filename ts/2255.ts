function countPrefixes(words: string[], s: string): number {
  let acc = 0;

  for (const ch of words) {
    if (s.startsWith(ch)) acc++;
  }

  return acc;
}
