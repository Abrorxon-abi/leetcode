/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findErrorNums = function (nums) {
    const n = nums.length;

    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);

    const expectedSumSquares = (n * (n + 1) * (2 * n + 1)) / 6;
    const actualSumSquares = nums.reduce((sum, num) => sum + num ** 2, 0);

    const deltaSum = expectedSum - actualSum;
    const deltaSumSquares = expectedSumSquares - actualSumSquares;

    const missingNumber = (deltaSum + deltaSumSquares / deltaSum) / 2;
    const duplicateNumber = missingNumber - deltaSum;

    return [duplicateNumber, missingNumber];
};