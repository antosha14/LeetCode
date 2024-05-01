# min length, range loop for indexes, if for remaining part


class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        ans = ""
        len1 = len(word1)
        len2 = len(word2)
        for letter_ind in range(min(len1, len2)):
            ans += word1[letter_ind]
            ans += word2[letter_ind]
        if len2 > len1:
            ans += word2[len1:]
        else:
            ans += word1[len2:]
        return ans
