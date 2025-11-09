function findPermutationDifference(s: string, t: string): number {
  let acc = 0;

  for (let i = 0; i < s.length; i++) {
    acc += Math.abs(i - t.indexOf(s[i]));
  }

  return acc;
}
