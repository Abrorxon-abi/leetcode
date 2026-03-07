function countPrefixSuffixPairs(words: string[]): number {
  let acc = 0;

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 1; j < words.length; j++) {
      if (words[j].startsWith(words[i]) && words[j].endsWith(words[i]) && i < j)
        acc++;
    }
  }

  return acc;
}
