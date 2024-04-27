"""
There are n stairs, a person standing at the bottom wants to climb stairs to reach the nth stair. The person can climb either 1 stair or 2 stairs at a time, the task is to count the number of ways that a person can reach at the top.
Fibonachi numbers, bc we can reach i step only from i-1 and i-2 steps and etc.

"""


class Solution:
    def climbStairs(n: int) -> int:
        dp = [0] * (n + 1)
        dp[0] = 1
        dp[1] = 1

        for i in range(2, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]

        return dp[-1]


sol = Solution.climbStairs

assert sol(n=2) == 2
assert sol(n=3) == 3
