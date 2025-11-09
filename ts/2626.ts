type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  let counter = init;

  for (let i = 0; i < nums.length; i++) {
    counter = fn(counter, nums[i]);
  }

  return counter;
}
