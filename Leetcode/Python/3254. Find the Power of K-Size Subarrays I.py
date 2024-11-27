"""
You are given an array of integers nums of length n and a positive integer k.

The power of an array is defined as:

Its maximum element if all of its elements are consecutive and sorted in ascending order.
-1 otherwise.
You need to find the power of all 
subarrays
 of nums of size k.

Return an integer array results of size n - k + 1, where results[i] is the power of nums[i..(i + k - 1)].
"""


class Solution:
    def resultsArray(self, nums: list[int], k: int) -> list[int]:
        ans = []
        start = 0

        for i, num in enumerate(nums):
            if i > 0 and num != nums[i - 1] + 1:
                start = i
            if i >= k - 1:
                ans.append(num if i - start + 1 >= k else -1)

        return ans
