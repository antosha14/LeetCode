"""
https://leetcode.com/problems/product-of-array-except-self/
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
"""

from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        ans = []
        for i in range(len(nums)):
            ans.append(1)
        return ans


sol = Solution.productExceptSelf

assert sol(nums=[1, 2, 3, 4]) == [24, 12, 8, 6]
assert sol(nums=[-1, 1, 0, -3, 3]) == [0, 0, 9, 0, 0]
