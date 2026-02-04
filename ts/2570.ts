function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  const obj: Record<number, number> = {};
  const arr = [...nums1, ...nums2];

  for (let i = 0; i < arr.length; i++) {
    const [id, val] = arr[i];

    if (obj[id] === undefined) {
      obj[id] = 0;
    }

    obj[id] += val;
  }
  return Object.entries(obj).map(([id, val]) => [Number(id), val]);
}
