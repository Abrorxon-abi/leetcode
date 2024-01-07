/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */

var jobScheduling = function (startTime, endTime, profit) {
    const jobs = [];

    for (let i = 0; i < startTime.length; i++) {
        jobs.push([startTime[i], endTime[i], profit[i]]);
    }

    jobs.sort((a, b) => a[1] - b[1]);

    const dp = new Array(jobs.length).fill(0);
    dp[0] = jobs[0][2];

    for (let i = 1; i < jobs.length; i++) {
        let currentProfit = jobs[i][2];
        let prevCompatible = findPreviousCompatibleJob(jobs, i);

        if (prevCompatible !== -1) {
            currentProfit += dp[prevCompatible];
        }

        dp[i] = Math.max(dp[i - 1], currentProfit);
    }

    return dp[jobs.length - 1];
};

function findPreviousCompatibleJob(jobs, currentIndex) {
    for (let i = currentIndex - 1; i >= 0; i--) {
        if (jobs[i][1] <= jobs[currentIndex][0]) {
            return i;
        }
    }
    return -1;
}
