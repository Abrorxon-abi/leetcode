function canBeTypedWords(text: string, brokenLetters: string): number {
  let words = text.split(" ");
  for (const char of brokenLetters) {
    words = words.filter((word) => !word.includes(char));
  }
  return words.length;
}
