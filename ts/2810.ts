function finalString(s: string): string {
  let ans = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "i") {
      ans.reverse();
    } else {
      ans.push(s[i]);
    }
  }

  return ans.join("");
}
