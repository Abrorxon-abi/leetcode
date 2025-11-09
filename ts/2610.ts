function findMatrix(nums: number[]): number[][] {
  const freq: Record<number, number> = nums.reduce((acc, n) => {
    acc[n] = (acc[n] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const rowsCount = Math.max(...Object.values(freq));
  const res: number[][] = Array.from({ length: rowsCount }, () => []);

  for (const [key, count] of Object.entries(freq)) {
    const num = Number(key);
    for (let i = 0; i < count; i++) {
      res[i].push(num);
    }
  }

  return res;
}
