/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var findMatrix = function (nums) {
    const freqMap = new Map();
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    const sortedNums = nums.sort((a, b) => {
        const freqComparison = freqMap.get(b) - freqMap.get(a);
        return freqComparison !== 0 ? freqComparison : a - b;
    });

    const resultMatrix = [];

    for (const num of sortedNums) {
        let added = false;
        for (const row of resultMatrix) {
            if (!row.includes(num)) {
                row.push(num);
                added = true;
                break;
            }
        }
        if (!added) {
            resultMatrix.push([num]);
        }
    }

    return resultMatrix;
};