/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */

var closeStrings = function (word1, word2) {
    const freq1 = getFrequency(word1);
    const freq2 = getFrequency(word2);

    if (!arraysEqual([...freq1.keys()].sort(), [...freq2.keys()].sort())) {
        return false;
    }

    return arraysEqual([...freq1.values()].sort(), [...freq2.values()].sort());
};

function getFrequency(word) {
    const frequency = new Map();
    for (const char of word) {
        frequency.set(char, (frequency.get(char) || 0) + 1);
    }
    return frequency;
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}