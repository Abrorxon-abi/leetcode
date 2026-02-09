function divideArray(nums: number[]): boolean {
  let set = new Set();

  nums.forEach((num) => {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  });

  return set.size === 0;
}
