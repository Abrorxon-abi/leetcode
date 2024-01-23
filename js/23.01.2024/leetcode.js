/**
 * @param {string[]} arr
 * @return {number}
 */

var maxLength = function (arr) {
    function toBitmask(s) {
        let bitmask = 0;
        for (let char of s) {
            let charBit = char.charCodeAt(0) - 'a'.charCodeAt(0);
            if ((bitmask >> charBit) & 1) {
                return 0;
            }
            bitmask |= 1 << charBit;
        }
        return bitmask;
    }

    function backtrack(start, bitmask) {
        max_length = Math.max(max_length, bitmask.toString(2).split('1').length - 1);

        for (let i = start; i < arr.length; i++) {
            let newBitmask = toBitmask(arr[i]);
            if (newBitmask && !(newBitmask & bitmask)) {
                backtrack(i + 1, bitmask | newBitmask);
            }
        }
    }

    let max_length = 0;
    backtrack(0, 0);
    return max_length;
};