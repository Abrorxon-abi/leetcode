// Problem Statement: https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/description/

function sumZero(n: number): number[] {
  const arr: number[] = Array.from({ length: n });
  let num = 0 - Math.floor(n / 2);

  for (let i = 0; i < n; i++) {
    if (n % 2 === 0) {
      if (num === 0) num += 1;
      arr[i] = num;
    } else {
      arr[i] = num;
    }
    num += 1;
  }

  return arr;
}
