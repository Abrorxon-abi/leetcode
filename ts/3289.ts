function getSneakyNumbers(nums: number[]): number[] {
  const obj: Record<number, number> = nums.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const numbersWithValueTwo = Object.entries(obj)
    .filter(([_, count]) => count === 2)
    .map(([num]) => Number(num));

  return numbersWithValueTwo;
}
