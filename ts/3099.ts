function sumOfTheDigitsOfHarshadNumber(x: number): number {
  if (x === 100) return 1;

  const first = Math.floor(x / 10);
  const second = x % 10;
  const sum = first + second;

  return x % sum === 0 ? sum : -1;
}
