from typing import List


class Solution:
    def numSubmatrixSumTarget(self, matrix: List[List[int]], target: int) -> int:
        m, n = len(matrix), len(matrix[0])
        count = 0

        for i in range(m):
            for j in range(1, n):
                matrix[i][j] += matrix[i][j - 1]

        for left in range(n):
            for right in range(left, n):
                prefix_sum = {0: 1}
                current_sum = 0

                for row in range(m):
                    current_sum += matrix[row][right] - \
                        (matrix[row][left - 1] if left > 0 else 0)

                    if current_sum - target in prefix_sum:
                        count += prefix_sum[current_sum - target]

                    prefix_sum[current_sum] = prefix_sum.get(
                        current_sum, 0) + 1

        return count
