function smallestNumber(n: number): number {
  let k = 1;
  while (n) {
    if (2 ** k - 1 >= n) return 2 ** k - 1;
    k++;
  }

  return -1;
}
