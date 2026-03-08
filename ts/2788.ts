function splitWordsBySeparator(words: string[], separator: string): string[] {
  const ans = [];

  for (let i = 0; i < words.length; i++) {
    ans.push(...words[i].split(separator));
  }

  return ans.filter(String);
}
