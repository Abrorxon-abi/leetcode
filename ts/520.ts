function detectCapitalUse(word: string): boolean {
  if (
    word === word.toUpperCase() ||
    word === word.toLowerCase() ||
    word === word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ) {
    return true;
  }

  return false;
}
