function smallestNumber(pattern: string): string {
  let ans = Array.from({ length: pattern.length + 1 }, (_, i) => i + 1);

  for (let i = 0; i <= pattern.length; i++) {
    if (pattern[i] === "D") {
      let start = i;
      while (pattern[i] === "D") {
        i++;
      }
      let part = ans.slice(start, i + 1);
      part.reverse();
      ans.splice(start, part.length, ...part);
    }
  }

  return ans.join("");
}
