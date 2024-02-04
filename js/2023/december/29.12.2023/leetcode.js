/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */

var minDifficulty = function (jobDifficulty, d) {
    const n = jobDifficulty.length;

    if (n < d) {
        return -1;
    }

    const dp = Array.from({ length: n + 1 }, () => Array(d + 1).fill(Number.POSITIVE_INFINITY));
    dp[0][0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let k = 1; k <= d; k++) {
            let maxDifficulty = 0;
            for (let j = i; j > 0; j--) {
                maxDifficulty = Math.max(maxDifficulty, jobDifficulty[j - 1]);
                dp[i][k] = Math.min(dp[i][k], dp[j - 1][k - 1] + maxDifficulty);
            }
        }
    }

    const result = dp[n][d];
    return result !== Number.POSITIVE_INFINITY ? result : -1;

};