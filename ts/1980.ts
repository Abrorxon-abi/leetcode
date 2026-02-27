function findDifferentBinaryString(nums: string[]): string {
  const ans = new Array(nums.length).fill("0");
  if (!nums.includes(ans.join(""))) {
    return ans.join("");
  }

  for (let i = 0; i < nums.length; i++) {
    ans[i] = "1";
    if (!nums.includes(ans.join(""))) {
      return ans.join("");
    }
  }

  return "";
}
