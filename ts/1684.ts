function countConsistentStrings(allowed: string, words: string[]): number {
  let counter = 0;

  for (let i = 0; i < words.length; i++) {
    if ([...words[i]].every((ch) => allowed.includes(ch))) counter++;
  }

  return counter;
}
