function mostWordsFound(sentences: string[]): number {
  let maxCount = 0;
  for (let sentence of sentences) {
    maxCount = Math.max(maxCount, sentence.split(" ").length);
  }
  return maxCount;
}
