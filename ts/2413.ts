function smallestEvenMultiple(n: number): number {
  if (n % 2 === 0) return n;

  let ans = n;

  while (ans % 2 !== 0 || ans % n !== 0) {
    ans++;
  }

  return ans;
}
