from typing import List


class Solution:
    def sumSubarrayMins(self, arr: List[int]) -> int:
        mod = 10**9 + 7
        n = len(arr)
        stack = []
        left = [0] * n
        right = [0] * n
        sum_val = 0

        for i in range(n):
            while stack and arr[i] < arr[stack[-1]]:
                stack.pop()
            left[i] = i - stack[-1] if stack else i + 1
            stack.append(i)

        stack = []

        for i in range(n - 1, -1, -1):
            while stack and arr[i] <= arr[stack[-1]]:
                stack.pop()
            right[i] = stack[-1] - i if stack else n - i
            stack.append(i)

        for i in range(n):
            sum_val = (sum_val + arr[i] * left[i] * right[i]) % mod

        return sum_val
