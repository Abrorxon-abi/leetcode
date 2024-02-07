/**
 * @param {string} s
 * @return {string}
 */

var frequencySort = function (s) {
  const charCount = new Map();
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  const sortedChars = Array.from(charCount.keys()).sort(
    (a, b) => charCount.get(b) - charCount.get(a)
  );

  const result = sortedChars
    .map((char) => char.repeat(charCount.get(char)))
    .join("");

  return result;
};
