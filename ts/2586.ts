function vowelStrings(words: string[], left: number, right: number): number {
  let acc = 0;

  for (let i = left; i <= right; i++) {
    if (startsWithVowel(words[i]) && endsWithVowel(words[i])) {
      acc++;
    }
  }

  return acc;
}

function startsWithVowel(word: string) {
  var vowels = "aeiouAEIOU";
  return vowels.indexOf(word[0]) !== -1;
}

function endsWithVowel(word: string) {
  var vowels = "aeiouAEIOU";
  return vowels.indexOf(word[word.length - 1]) !== -1;
}
