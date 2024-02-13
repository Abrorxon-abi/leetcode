/**
 * @param {string[]} words
 * @return {string}
 */

var firstPalindrome = function (words) {
  const isPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  for (const word of words) {
    if (isPalindrome(word)) {
      return word;
    }
  }

  return "";
};
