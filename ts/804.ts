function uniqueMorseRepresentations(words: string[]): number {
  const morseAlphabet = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  const set = new Set();

  for (let i = 0; i < words.length; i++) {
    let word = "";
    for (let j = 0; j < words[i].length; j++) {
      word += morseAlphabet[words[i].charCodeAt(j) - 97];
    }
    set.add(word);
  }

  return set.size;
}
