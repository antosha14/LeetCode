# reverse with slice does not work if first 2 arguments are present
class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        char_ind = word.find(ch) + 1
        if char_ind:
            return word[0:char_ind][::-1] + word[char_ind:]
        else:
            return word
