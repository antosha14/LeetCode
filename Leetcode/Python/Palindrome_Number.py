"""
https://leetcode.com/problems/palindrome-number/
"""

from math import floor


class Solution:
    def isPalindrome(self, x: int) -> bool:
        target = str(x)
        reverseds = target[::-1]
        if target == reverseds:
            return True
        return False
