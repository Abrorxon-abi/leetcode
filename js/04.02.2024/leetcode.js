/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let charCount = new Map();
  let requiredChars = t.length;
  let left = 0;
  let minLength = Infinity;
  let minWindowStart = 0;

  for (let char of t) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let right = 0; right < s.length; right++) {
    if (charCount.has(s[right])) {
      charCount.set(s[right], charCount.get(s[right]) - 1);
      if (charCount.get(s[right]) >= 0) {
        requiredChars--;
      }
    }

    while (requiredChars === 0) {
      if (right - left < minLength) {
        minLength = right - left + 1;
        minWindowStart = left;
      }

      if (charCount.has(s[left])) {
        charCount.set(s[left], charCount.get(s[left]) + 1);
        if (charCount.get(s[left]) > 0) {
          requiredChars++;
        }
      }
      left++;
    }
  }

  return minLength === Infinity ? "" : s.substr(minWindowStart, minLength);
};
