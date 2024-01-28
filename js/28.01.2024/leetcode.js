/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */

var numSubmatrixSumTarget = function (matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 1; j < n; j++) {
            matrix[i][j] += matrix[i][j - 1];
        }
    }

    for (let left = 0; left < n; left++) {
        for (let right = left; right < n; right++) {
            const prefixSum = new Map();
            let currentSum = 0;

            for (let row = 0; row < m; row++) {
                currentSum += matrix[row][right] - (matrix[row][left - 1] || 0);

                if (currentSum === target) {
                    count++;
                }

                if (prefixSum.has(currentSum - target)) {
                    count += prefixSum.get(currentSum - target);
                }

                prefixSum.set(currentSum, (prefixSum.get(currentSum) || 0) + 1);
            }
        }
    }

    return count;
};