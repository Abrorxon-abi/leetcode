function mergeAlternately(word1: string, word2: string): string {
  let str = "";
  let max = Math.max(word1.length, word2.length);
  for (let i = 0; i < max; i++) {
    if (word1[i] != undefined) {
      str += word1[i];
    }
    if (word2[i] != undefined) {
      str += word2[i];
    }
  }
  return str;
}
