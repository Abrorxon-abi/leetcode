/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  let anagramGroups = {};

  for (let word of strs) {
    let sortedWord = word.split("").sort().join("");

    if (!anagramGroups[sortedWord]) {
      anagramGroups[sortedWord] = [word];
    } else {
      anagramGroups[sortedWord].push(word);
    }
  }

  let result = Object.values(anagramGroups);

  return result;
};
