/**
 * @param {number[]} arr
 * @return {number}
 */

const sumSubarrayMins = (arr) => {
    const mod = 1e9 + 7;
    const n = arr.length;
    let sum = 0;
    let stack = [];
    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && arr[i] < arr[stack[stack.length - 1]]) {
            stack.pop();
        }
        left[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
        stack.push(i);
    }

    stack = [];

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[i] <= arr[stack[stack.length - 1]]) {
            stack.pop();
        }
        right[i] = stack.length === 0 ? n - i : stack[stack.length - 1] - i;
        stack.push(i);
    }

    for (let i = 0; i < n; i++) {
        sum = (sum + arr[i] * left[i] * right[i]) % mod;
    }

    return sum;
};