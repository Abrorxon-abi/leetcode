function isAcronym(words: string[], s: string): boolean {
  if (words.length !== s.length) return false;

  let w = "";

  for (let word of words) {
    w += word[0];
  }

  return w === s;
}
