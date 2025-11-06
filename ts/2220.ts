function minBitFlips(start: number, goal: number): number {
  let num1 = start.toString(2);
  let num2 = goal.toString(2);
  let len = Math.max(num1.length, num2.length);
  num1 = num1.padStart(len, "0");
  num2 = num2.padStart(len, "0");

  let acc = 0;

  for (let i = 0; i < num1.length; i++) {
    if (num1[i] !== num2[i]) acc++;
  }

  return acc;
}
