/**
 * @param {number[]} nums
 * @return {number}
 */

var numberOfArithmeticSlices = function (nums) {
    const n = nums.length;
    let totalCount = 0;
    const dp = new Array(n).fill(null).map(() => ({}));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            const diff = nums[i] - nums[j];
            dp[i][diff] = (dp[i][diff] || 0) + 1;

            if (diff in dp[j]) {
                dp[i][diff] += dp[j][diff];
            }

            totalCount += dp[j][diff] || 0;
        }
    }

    return totalCount;
};