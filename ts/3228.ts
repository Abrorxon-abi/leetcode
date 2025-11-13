function maxOperations(s: string): number {
  let counter = 0;
  let zeros = 0;
  let fromZero = false;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "0" && !fromZero) {
      zeros++;
      fromZero = true;
    } else if (s[i] === "1") {
      counter += zeros;
      fromZero = false;
    }
  }

  return counter;
}
