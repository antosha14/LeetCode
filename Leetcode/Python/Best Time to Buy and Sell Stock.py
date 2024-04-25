"""
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
"""

from typing import List

"""
Looping throw array, saving info about lowest price and max profit
"""


class Solution:
    def maxProfit(prices: List[int]) -> int:
        enter_price = prices[0]
        max_profit = 0
        for price in prices:
            if price < enter_price:
                enter_price = price
            elif price - enter_price > max_profit:
                max_profit = price - enter_price
        return max_profit


sol = Solution.maxProfit

assert sol(prices=[7, 1, 5, 3, 6, 4]) == 5
assert sol(prices=[7, 6, 4, 3, 1]) == 0
