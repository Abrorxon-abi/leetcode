function buildArray(target: number[], n: number): string[] {
  const ans = [];

  let j = 1;

  for (let i = 0; j <= n; j++) {
    if (target[i] === j) {
      ans.push("Push");
      i++;
    } else {
      ans.push("Push");
      ans.push("Pop");
    }
    if (target.length === i) return ans;
  }

  return ans;
}
