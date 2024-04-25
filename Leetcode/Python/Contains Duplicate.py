"""Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct."""

from typing import List

"""
Conversion to set
"""


class Solution:
    def containsDuplicate(nums: List[int]) -> bool:
        nums_tuple = set(nums)
        if len(nums) == len(nums_tuple):
            return False
        return True


class Solution2:
    def containsDuplicate(nums: List[int]) -> bool:
        return len(nums) > len(set(nums))


"""
Loop to form dictionary with seen values checking if current value is in seen and returning if true
"""


class Solution3:
    def containsDuplicate(nums: List[int]) -> bool:
        seen = {}
        for n in nums:
            if n in seen:
                return True
            else:
                seen[n] = True

        return False


sol = Solution2.containsDuplicate


assert sol(nums=[1, 2, 3, 1]) == True
assert sol(nums=[1, 2, 3, 4]) == False
assert sol(nums=[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]) == True
assert sol(nums=[1, 2, 3, 4]) == False
