function largestAltitude(gain: number[]): number {
  let ans = 0;
  let alt = 0;

  for (let i = 0; i < gain.length; i++) {
    alt += gain[i];
    ans = Math.max(ans, alt);
  }

  return ans;
}
