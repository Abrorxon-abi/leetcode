function repeatedCharacter(s: string): string {
  const set = new Set();

  for (let ch of s) {
    if (set.has(ch)) return ch;
    set.add(ch);
  }

  return "";
}
