class Solution:
    def climbStairs(n: int) -> int:
        dp = [0 for x in range(n + 1)]
        dp[0], dp[1] = 1, 1

        for i in range(2, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]
        return dp[n]


sol = Solution.climbStairs

assert sol(n=2) == 2
assert sol(n=3) == 3
