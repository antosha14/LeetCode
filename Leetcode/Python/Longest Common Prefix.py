""" Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string ""."""

from typing import List

"INITIAL"


class Solution:
    def longestCommonPrefix(strs: List[str]) -> str:
        commonstring = ""
        for letter in strs[0]:
            commonstring += letter
            for word in strs:
                if word.startswith(commonstring):
                    continue
                else:
                    return commonstring[:-1]
        return commonstring


"Faster solution"

"""

"""


class Solution2:
    def longestCommonPrefix(strs: List[str]) -> str:
        if len(strs) == 0:
            return ""
        prefix = strs[0]
        for i in range(1, len(strs)):
            while strs[i].find(prefix) != 0:
                prefix = prefix[0 : len(prefix) - 1]
                if prefix == "":
                    return ""
        return prefix


sol = Solution2.longestCommonPrefix

assert sol(strs=["flower", "flow", "flight"]) == "fl"
assert sol(strs=["dog", "racecar", "car"]) == ""
assert sol(strs=["a"]) == "a"
