from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagramGroups = {}

        for word in strs:
            sortedWord = ''.join(sorted(word))

            if sortedWord not in anagramGroups:
                anagramGroups[sortedWord] = [word]
            else:
                anagramGroups[sortedWord].append(word)

        result = list(anagramGroups.values())

        return result
