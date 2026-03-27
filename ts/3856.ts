function trimTrailingVowels(s: string): string {
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = s.length - 1; i >= 0; i--) {
    if (!vowels.includes(s[i])) {
      return s;
    }

    s = s.slice(0, -1);
  }

  return "";
}
