function countDigits(num: number): number {
  let acc = 0;
  let str = num.toString();
  for (let i = 0; i < str.length; i++) {
    if (num % Number(str[i]) === 0) acc++;
  }

  return acc;
}
