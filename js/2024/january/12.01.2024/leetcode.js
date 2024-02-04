/**
 * @param {string} s
 * @return {boolean}
 */

var halvesAreAlike = function (s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    function countVowels(str) {
        return Array.from(str).filter(char => vowels.has(char)).length;
    }

    const length = s.length;
    const mid = Math.floor(length / 2);
    const a = s.slice(0, mid);
    const b = s.slice(mid);

    return countVowels(a) === countVowels(b);
};