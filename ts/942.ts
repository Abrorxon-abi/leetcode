function diStringMatch(s: string): number[] {
  let low = 0;
  let high = s.length;
  const ans = [];

  for (let i = 0; i <= s.length; i++) {
    if (s[i] === "I") {
      ans.push(low);
      low++;
    } else {
      ans.push(high);
      high--;
    }
  }

  return ans;
}
