function findArray(pref: number[]): number[] {
  const ans = [];
  ans.push(pref[0]);

  for (let i = 0; i < pref.length - 1; i++) {
    ans.push(pref[i + 1] ^ pref[i]);
  }

  return ans;
}
