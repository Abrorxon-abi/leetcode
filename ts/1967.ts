function numOfStrings(patterns: string[], word: string): number {
  let acc = 0;

  for (let i = 0; i < patterns.length; i++) {
    if (word.includes(patterns[i])) acc++;
  }

  return acc;
}
