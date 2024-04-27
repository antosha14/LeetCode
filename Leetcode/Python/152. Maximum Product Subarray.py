"""
https://leetcode.com/problems/maximum-product-subarray/
Given an integer array nums, find a subarray that has the largest product, and return the product.
"""

"""
keep max_product and min product for every iteration
Save the previous step's maximum and minimum.
Calculate the current maximum product ending at the current number.
It's the maximum of the current number, product of the current number and previous maximum,
or the product of the current number and previous minimum.
Calculate the current minimum product ending at the current number.
It's the minimum for the same reason above but will be used to handle negative number
"""

from typing import List


class Solution:
    def maxProduct(nums: List[int]) -> int:
        max_product = current_max = current_min = nums[0]
        for num in nums[1:]:
            temp_max, temp_min = current_max, current_min
            current_max = max(num, temp_max * num, temp_min * num)
            current_min = min(num, temp_max * num, temp_min * num)
            max_product = max(max_product, current_max)
        return max_product


"""
Optimisation using ifs
"""


class Solution2:
    def maxProduct(nums: List[int]) -> int:
        ans = float("-inf")
        prod = 1
        for i in nums:
            prod *= i
            if prod > ans:
                ans = prod
            if prod == 0:
                prod = 1
        prod = 1
        for i in nums[::-1]:
            prod *= i
            if prod > ans:
                ans = prod
            if prod == 0:
                prod = 1
        return ans


sol = Solution2.maxProduct

assert sol(nums=[2, 3, -2, 4]) == 6
assert sol(nums=[-2, 0, -1]) == 0
assert sol(nums=[3, -1, 4]) == 4
