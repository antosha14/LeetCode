"""Given an integer array nums, find the subarray with the largest sum, and return its sum."""

from typing import List

"""
Running sum, and keeping max sum at every iteration using max
0 running sum if it becomes negative
"""


class Solution:
    def maxSubArray(nums: List[int]) -> int:
        current_sum = 0
        max_sum = float("-inf")
        for number in nums:
            current_sum += number
            max_sum = max(max_sum, current_sum)
            if current_sum < 0:
                current_sum = 0
        return max_sum


"""
Max isnt needed at every iteration we could use if to optimize
"""


class Solution2:
    def maxSubArray(nums: List[int]) -> int:
        maxSum = float("-inf")
        currentSum = 0

        for num in nums:
            currentSum += num

            if currentSum > maxSum:
                maxSum = currentSum

            if currentSum < 0:
                currentSum = 0

        return maxSum


sol = Solution.maxSubArray

assert sol(nums=[-2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6
assert sol(nums=[1]) == 1
assert sol(nums=[5, 4, -1, 7, 8]) == 23
