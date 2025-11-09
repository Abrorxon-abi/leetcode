function findWordsContaining(words: string[], x: string): number[] {
  const idxs = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) idxs.push(i);
  }

  return idxs;
}
