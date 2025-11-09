function differenceOfSum(nums: number[]): number {
  const num1 = nums.reduce((acc, n) => (acc += n), 0);

  let num2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 9) {
      num2 += getDigitsMathematically(nums[i]).reduce(
        (acc, n) => (acc += n),
        0
      );
    } else {
      num2 += nums[i];
    }
  }

  return Math.abs(num1 - num2);
}

function getDigitsMathematically(number: number) {
  const digits = [];

  while (number > 0) {
    const lastDigit = number % 10;
    digits.unshift(lastDigit);
    number = Math.floor(number / 10);
  }
  return digits;
}
