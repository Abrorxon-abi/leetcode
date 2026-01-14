function pivotInteger(n: number): number {
  for (let i = 1; i <= n; i++) {
    let before = (i / 2) * (1 + i);
    let after = ((n - i + 1) / 2) * (i + n);

    if (before === after) return i;
  }

  return -1;
}
