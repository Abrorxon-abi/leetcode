function minPartitions(n: string): number {
  const val = ["9", "8", "7", "6", "5", "4", "3", "2", "1"];
  for (let i = 0; i < 10; i++) {
    if (n.includes(val[i])) return 9 - i;
  }

  return 0;
}
