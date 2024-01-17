/**
 * @param {number[]} arr
 * @return {boolean}
 */

var uniqueOccurrences = function (arr) {
    const countMap = {};

    arr.forEach(num => {
        countMap[num] = (countMap[num] || 0) + 1;
    });

    const uniqueCounts = new Set(Object.values(countMap));

    return uniqueCounts.size === Object.keys(countMap).length;
};
