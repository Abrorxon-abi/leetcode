function prefixCount(words: string[], pref: string): number {
  let counter = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) counter++;
  }

  return counter;
}
