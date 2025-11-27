function minSwaps(s: string): number {
  let balance = 0;
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[") {
      counter++;
    } else {
      counter--;
    }

    if (counter < 0) {
      balance = Math.min(balance, counter);
    }
  }

  return Math.ceil(Math.abs(balance / 2));
}
