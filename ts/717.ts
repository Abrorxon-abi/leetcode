function isOneBitCharacter(bits: number[]): boolean {
  let ans = true;

  for (let i = 0; i < bits.length; i++) {
    if (bits[i] === 1) {
      i++;
      ans = false;
    } else {
      ans = true;
    }
  }

  return ans;
}
