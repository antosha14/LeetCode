# first find min and max str
# then for loop 2 checks for division to optimize
# then construct potential max str and potential small
# check if answer is right for max and min str
from math import gcd  # MATH HAS METHOD FOR THIS TASK


class Solution:
    def gcdOfStrings(str1: str, str2: str) -> str:
        answ = ""
        if len(str1) > len(str2):
            min_str = str2
            max_str = str1
        else:
            min_str = str1
            max_str = str2
        for index in range(1, len(min_str) + 1):
            if len(max_str) % len(min_str[:index]) != 0:
                continue
            if len(min_str) % len(min_str[:index]) != 0:
                continue
            potential_answ = min_str[:index] * int(len(max_str) / len(min_str[:index]))
            anw_check = min_str[:index] * int(len(min_str) / len(min_str[:index]))
            if potential_answ == max_str and anw_check == min_str:
                answ = min_str[:index]
        return answ


# OPTIMIZATION # MATH HAS METHOD FOR THIS TASK
# CHECK and use simple gcd from math


class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        if str1 + str2 != str2 + str1:
            return ""
        from math import gcd

        return str1[: gcd(len(str1), len(str2))]


# OPTIMIZATION # MATH HAS METHOD FOR THIS TASK


sol = Solution.gcdOfStrings

assert sol(str1="ABCABC", str2="ABC") == "ABC"
assert sol(str1="ABABAB", str2="ABAB") == "AB"
assert sol(str1="LEET", str2="CODE") == ""
