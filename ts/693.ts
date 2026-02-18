function hasAlternatingBits(n: number): boolean {
  let bit = n.toString(2);
  let ans = true;

  let j = 1;
  for (let i = 0; i < bit.length - 1; i++) {
    if (bit[i] === bit[j]) ans = false;
    j++;
  }

  return ans;
}
