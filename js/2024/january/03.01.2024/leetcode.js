/**
 * @param {string[]} bank
 * @return {number}
 */

var numberOfBeams = function (bank) {
    let ans = 0;
    let temp = 0;

    for (const row of bank) {
        const n = (row.match(/1/g) || []).length;
        if (n === 0) {
            continue;
        }
        ans += temp * n;
        temp = n;
    }

    return ans;

};