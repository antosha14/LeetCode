"""
mx: This variable calculates the maximum possible value that can be represented with maximumBit bits. The expression (1 << maximumBit) shifts 1 to the left by maximumBit positions, which effectively computes 
2maximumBit 2 maximumBit. Subtracting 1 gives us a number where all bits are set to 1 for the given bit length. For example, if maximumBit is 3, then mx would be 
"""


class Solution:
    def getMaximumXor(self, nums: List[int], maximumBit: int) -> List[int]:
        mx = (1 << maximumBit) - 1
        ans = []
        xors = 0

        for num in nums:
            xors ^= num
            ans.append(xors ^ mx)

        return ans[::-1]
