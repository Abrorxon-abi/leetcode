function getSneakyNumbers(nums: number[]): number[] {
  const obj = nums.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  const numbersWithValueTwo = Object.entries(obj)
    .filter(([_, count]) => count === 2)
    .map(([num]) => Number(num));

  return numbersWithValueTwo;
}
