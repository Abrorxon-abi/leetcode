/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
    const charCount = new Map();

    for (const word of words) {
        for (const char of word) {
            charCount.set(char, (charCount.get(char) || 0) + 1);
        }
    }

    const totalWords = words.length;
    for (const count of charCount.values()) {
        if (count % totalWords !== 0) {
            return false;
        }
    }

    return true;
};