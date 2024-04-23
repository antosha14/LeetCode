"""

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
