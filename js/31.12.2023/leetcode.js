/**
 * @param {string} s
 * @return {number}
 */

var maxLengthBetweenEqualCharacters = function (s) {
    let firstOccurrence = {};
    let maxDistance = -1;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (firstOccurrence.hasOwnProperty(char)) {
            const distance = i - firstOccurrence[char] - 1;
            maxDistance = Math.max(maxDistance, distance);
        } else {
            firstOccurrence[char] = i;
        }
    }

    return maxDistance;
};
