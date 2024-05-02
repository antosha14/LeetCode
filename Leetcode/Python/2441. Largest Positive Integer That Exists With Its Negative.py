from typing import List

# optimization with conversion to set and multiple if levels


class Solution1:
    def findMaxK(self, nums: List[int]) -> int:
        k = -1
        nums_set = set(nums)
        for n in nums:
            if n > 0:
                if n > k and -n in nums_set:
                    k = n

        return k


# Force using loop
class Solution2:
    def findMaxK(self, nums: List[int]) -> int:
        ans = -1
        for index in range(len(nums)):
            if nums[index] > 0 and -nums[index] in nums:
                ans = max(ans, nums[index])
        return ans
