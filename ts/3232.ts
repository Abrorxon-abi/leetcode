function canAliceWin(nums: number[]): boolean {
  const singleDigitSum = nums.reduce(
    (acc, n) => (n < 10 ? (acc += n) : (acc += 0)),
    0,
  );

  const doubleDigitSum = nums.reduce(
    (acc, n) => (n > 9 ? (acc += n) : (acc += 0)),
    0,
  );

  return singleDigitSum !== doubleDigitSum;
}
