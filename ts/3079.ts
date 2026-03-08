function sumOfEncryptedInt(nums: number[]): number {
  let acc = 0;

  const obj: Record<number, number> = {
    1: 1,
    2: 11,
    3: 111,
    4: 1111,
  };

  for (let i = 0; i < nums.length; i++) {
    const arr = String(nums[i]).split("").map(Number);
    acc += Math.max(...arr) * obj[arr.length];
  }

  return acc;
}
