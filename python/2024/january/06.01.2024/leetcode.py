from typing import List


class Solution:
    def jobScheduling(self, startTime: List[int], endTime: List[int], profit: List[int]) -> int:
        jobs = sorted(zip(startTime, endTime, profit), key=lambda x: x[1])
        dp = [0] * len(jobs)
        dp[0] = jobs[0][2]

        def find_previous_compatible_job(current_index):
            low, high = 0, current_index - 1

            while low <= high:
                mid = (low + high) // 2
                if jobs[mid][1] <= jobs[current_index][0]:
                    if jobs[mid + 1][1] <= jobs[current_index][0]:
                        low = mid + 1
                    else:
                        return mid
                else:
                    high = mid - 1

            return -1

        for i in range(1, len(jobs)):
            current_profit = jobs[i][2]
            prev_compatible = find_previous_compatible_job(i)

            if prev_compatible != -1:
                current_profit += dp[prev_compatible]

            dp[i] = max(dp[i - 1], current_profit)

        return dp[-1]
