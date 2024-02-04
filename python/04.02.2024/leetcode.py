class Solution:
    def minWindow(self, s: str, t: str) -> str:
        char_count = {}
        required_chars = len(t)
        left = 0
        min_length = float('inf')
        min_window_start = 0

        for char in t:
            char_count[char] = char_count.get(char, 0) + 1

        for right in range(len(s)):
            if s[right] in char_count:
                char_count[s[right]] -= 1
                if char_count[s[right]] >= 0:
                    required_chars -= 1

            while required_chars == 0:
                if right - left < min_length:
                    min_length = right - left + 1
                    min_window_start = left

                if s[left] in char_count:
                    char_count[s[left]] += 1
                    if char_count[s[left]] > 0:
                        required_chars += 1
                left += 1

        return s[min_window_start:min_window_start + min_length] if min_length != float('inf') else ""
