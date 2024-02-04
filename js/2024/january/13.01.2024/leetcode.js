/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

var minSteps = function (s, t) {
    if (s.length !== t.length) {
        return -1;
    }

    const charCount = Array(26).fill(0);

    for (const char of s) {
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }

    for (const char of t) {
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)] -= 1;
    }

    const steps = charCount.reduce((acc, count) => acc + Math.abs(count), 0) / 2;

    return steps;
};