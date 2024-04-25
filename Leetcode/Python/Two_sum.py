"""
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
"""

from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for number in nums:
            i = -1
            for remaining in nums:
                i += 1
                if number + remaining == target and (nums.index(number) != i):
                    return [nums.index(number), i]


"""
Dictionary of numbers as keys and their indexes as values is formed after checking
Check if nessesary addition is in dictionary, it it is return nessesary info
"""


class Solution2:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        d = {}
        for i in range(len(nums)):
            require = target - nums[i]
            if require in d:
                return d[require], i
            d[nums[i]] = i
        return []
