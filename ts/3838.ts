function mapWordWeights(words: string[], weights: number[]): string {
  const alphabetMap = Object.fromEntries(
    weights.map((value, index) => [String.fromCharCode(97 + index), value]),
  );

  const reversedAlphabetMap = Object.fromEntries(
    Array.from({ length: 26 }, (_, i) => [i, String.fromCharCode(122 - i)]),
  );

  const strArr = [];

  for (let word of words) {
    let acc = 0;
    for (let i = 0; i < word.length; i++) {
      acc += alphabetMap[word[i]];
    }
    strArr.push(reversedAlphabetMap[acc % 26]);
  }

  return strArr.join("");
}
