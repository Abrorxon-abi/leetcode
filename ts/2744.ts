function maximumNumberOfStringPairs(words: string[]): number {
  const set = new Set(words);
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    const reversed = words[i][1] + words[i][0];
    if (set.has(reversed) && reversed !== words[i]) {
      count++;
      set.delete(words[i]);
      set.delete(reversed);
    }
  }
  return count;
}
