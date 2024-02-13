from typing import List


class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        def isPalindrome(s):
            return s == s[::-1]

        for word in words:
            if isPalindrome(word):
                return word

        return ""
