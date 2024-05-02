from typing import List

# ans array, max_value, loop to form an array


class Solution:
    def kidsWithCandies(candies: List[int], extraCandies: int) -> List[bool]:
        max_candies_amount = max(candies)
        ans = []
        for curr_candies in candies:
            if curr_candies + extraCandies >= max_candies_amount:
                ans.append(True)
            else:
                ans.append(False)
        return ans


# One liner
class Solution2:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        maxCandy = max(candies)
        return [candy + extraCandies >= maxCandy for candy in candies]
