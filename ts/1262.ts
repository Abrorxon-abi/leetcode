function maxSumDivThree(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let sum = nums.reduce((acc, n) => (acc += n));

  if (sum % 3 === 0) return sum;

  let mod1 = [];
  let mod2 = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 === 1) mod1.push(nums[i]);
    if (nums[i] % 3 === 2) mod2.push(nums[i]);
  }

  let remove = Infinity;

  if (sum % 3 === 1) {
    if (mod1.length > 0) remove = Math.min(remove, mod1[0]);
    if (mod2.length > 1) remove = Math.min(remove, mod2[0] + mod2[1]);
  }

  if (sum % 3 === 2) {
    if (mod2.length > 0) remove = Math.min(remove, mod2[0]);
    if (mod1.length > 1) remove = Math.min(remove, mod1[0] + mod1[1]);
  }

  if (remove === Infinity) return 0;

  return sum - remove;
}
