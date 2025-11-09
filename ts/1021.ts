function removeOuterParentheses(s: string): string {
  let depth = 0;
  let ans = "";
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      depth++;
    } else {
      depth--;
    }

    if (depth === 0) {
      ans += s.slice(start + 1, i);
      start = i + 1;
    }
  }

  return ans;
}
